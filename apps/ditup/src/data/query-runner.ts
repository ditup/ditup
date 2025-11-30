// query-runner.ts
import {
  LdhopEngine,
  parseRdf,
  type LdhopQuery,
  type Variable,
} from "@ldhop/core";
import type { Term } from "n3";
import type { ResourceStore, ResourceStoreUnsubscribe } from "./resource-store";

interface QueryRunnerCallbacks<V extends Variable> {
  onVariableAdded?: (variable: V, value: Term, all: Set<Term>) => void;
  onVariableRemoved?: (variable: V, value: Term, all: Set<Term>) => void;
  onQueryComplete?: () => void;
}

export class QueryRunner<V extends Variable> {
  private getStore: () => ResourceStore;
  private query: LdhopQuery<V>;
  private subscriptions = new Map<string, ResourceStoreUnsubscribe>();
  private _engine?: LdhopEngine<V>;
  get engine() {
    return this._engine;
  }
  private callbacks: QueryRunnerCallbacks<V>;

  constructor(
    getStore: () => ResourceStore,
    query: LdhopQuery<V>,
    callbacks: QueryRunnerCallbacks<V> = {}
  ) {
    this.getStore = getStore;
    this.query = query;
    this.callbacks = callbacks;
  }

  run(variables: Partial<Record<V, Set<string>>>) {
    this.destroy();

    this._engine = new LdhopEngine(this.query, variables, undefined, {
      onNeedResource: (uri) => this.subscribeToResource(uri),
      onDropResource: (uri) => this.unsubscribeFromResource(uri),
      onVariableAdded: this.callbacks.onVariableAdded,
      onVariableRemoved: this.callbacks.onVariableRemoved,
      onQueryComplete: this.callbacks.onQueryComplete,
    });
  }

  destroy() {
    for (const unsubscribe of this.subscriptions.values()) {
      unsubscribe();
    }
    this.subscriptions.clear();
    this._engine = undefined;
  }

  private async subscribeToResource(uri: string) {
    await new Promise((resolve) => setTimeout(resolve, 0));

    if (this.subscriptions.has(uri)) {
      this.subscriptions.get(uri)?.();
    }

    const unsubscribe = this.getStore().subscribe(
      uri,
      { accept: "text/turtle" },
      (result) => {
        if (result.loading) return;

        if (result.error) {
          this._engine?.addGraph(uri, []);
        } else {
          const quads = parseRdf(result.data as string, {
            baseIRI: result.finalUrl,
            format: result.headers.get("content-type") ?? undefined,
          });
          this._engine?.addGraph(result.finalUrl, quads, uri);
        }
      }
    );

    this.subscriptions.set(uri, unsubscribe);
  }

  private unsubscribeFromResource(uri: string) {
    this.subscriptions.get(uri)?.();
    this.subscriptions.delete(uri);
  }
}

// Helpers
export function findLiteral(terms: Set<Term>): string | undefined {
  for (const term of terms) {
    if (term.termType === "Literal") return term.value;
  }
}

export function findNamedNode(terms: Set<Term>): string | undefined {
  for (const term of terms) {
    if (term.termType === "NamedNode") return term.value;
  }
}
