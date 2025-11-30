import "@awesome.me/webawesome/dist/components/avatar/avatar.js";
import "@awesome.me/webawesome/dist/components/popover/popover.js";
import { type LdhopQuery, type Variable } from "@ldhop/core";
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import type { Term } from "n3";
import { foaf, rdfs, space } from "rdf-namespaces";
import { unauthStore } from "./data";
import { QueryRunner } from "./data/query-runner";
import type {
  ResourceStore,
  ResourceStoreUnsubscribe,
} from "./data/resource-store";
import {
  type Interest,
  isInterest,
  processWikidataEntity,
  type WikidataEntitiesResult,
  wikidataRegex,
} from "./data/wikidata";

const query: LdhopQuery<
  "?webid" | "?profileDocument" | "?preferencesFile" | "?interest"
> = [
  {
    type: "match",
    subject: "?webid",
    predicate: rdfs.seeAlso,
    pick: "object",
    target: "?profileDocument",
  },
  {
    type: "add resources",
    variable: "?profileDocument",
  },
  {
    type: "match",
    subject: "?webid",
    predicate: space.preferencesFile,
    pick: "object",
    target: "?preferencesFile",
  },
  {
    type: "add resources",
    variable: "?preferencesFile",
  },
  {
    type: "match",
    subject: "?webid",
    predicate: foaf.topic_interest,
    pick: "object",
    target: "?interest",
  },
];

@customElement("dtp-interests")
export class DitupInterests extends LitElement {
  @property() webid?: string;
  @state() protected _interests?: Term[];
  @property({ attribute: false }) store?: ResourceStore;

  private handleVariable = (v: Variable, _: unknown, all: Set<Term>) => {
    if (v === "?interest") this._interests = Array.from(all);
  };
  private _runner = new QueryRunner(() => this.store!, query, {
    onVariableAdded: this.handleVariable,
    onVariableRemoved: this.handleVariable,
  });

  protected async updated(map: PropertyValues) {
    if (map.has("webid") || map.has("store")) {
      this._interests = [];
      if (this.webid) {
        this._runner.run({ "?webid": new Set([this.webid]) });
      } else {
        this._runner.destroy();
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._runner.destroy();
  }

  render() {
    return html`${Array.from(this._interests ?? new Set<Term>()).map(
      (interest) =>
        interest.termType === "NamedNode"
          ? html`<dtp-topic
              uri=${interest.id}
              .store=${unauthStore}
            ></dtp-topic>`
          : undefined
    )}`;
  }

  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem 1rem;
    }
  `;
}

@customElement("dtp-topic")
export class DitupTopic extends LitElement {
  @property() uri!: string;
  @property() language = "en";
  @state() protected _data: Interest = { uri: this.uri, aliases: [] };
  @state() store?: ResourceStore;

  private _unsubscribes = new Map<string, ResourceStoreUnsubscribe>();

  protected async updated(changedProperties: PropertyValues) {
    if (
      changedProperties.has("uri") ||
      changedProperties.has("store") ||
      changedProperties.has("language")
    ) {
      if (!this.store) return;
      this._data = { uri: this.uri, aliases: [] };
      const id = this.uri.match(wikidataRegex)?.[2] ?? "";
      // currently, we resolve only wikidata interests
      if (!id) return;

      const wdapiuri = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${id}&languages=${this.language}&format=json&origin=*`;
      const unsubscribe = this.store?.subscribe(wdapiuri, {}, (result) => {
        if (!result.loading && !result.error) {
          const outcome = processWikidataEntity({
            id,
            uri: this.uri,
            data: result.data as WikidataEntitiesResult,
            language: this.language,
          });
          if (isInterest(outcome)) this._data = outcome;
        }
      });
      this._unsubscribes.get(wdapiuri)?.();
      this._unsubscribes.set(wdapiuri, unsubscribe);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    const unsubscribes = this._unsubscribes.values();
    for (const u of unsubscribes) u();
  }

  render() {
    return html`
      <button id="interest">
        ${this._data.label ?? this.uri.split("/").pop()}
      </button>
      <wa-popover for="interest">
        <div>
          <img src=${ifDefined(this._data.image)} alt="" />
          <header>
            <h3>
              ${this._data.label}
              <a href=${ifDefined(this._data?.uri)}>link</a>
            </h3>
            ${this._data.aliases.length > 0
              ? html`<div>${this._data.aliases.join(", ")}</div>`
              : nothing}
            ${this._data.officialWebsite
              ? html`<a
                  href=${ifDefined(this._data.officialWebsite)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${this._data.officialWebsite}
                </a>`
              : nothing}
          </header>
          <section>${this._data.description}</section>
        </div>
      </wa-popover>
    `;
  }
}
