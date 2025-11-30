import "@awesome.me/webawesome/dist/components/avatar/avatar.js";
import { type LdhopQuery } from "@ldhop/core";
import { html, LitElement, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { foaf, rdfs, space, vcard } from "rdf-namespaces";
import { findLiteral, QueryRunner } from "./data/query-runner.js";
import type { ResourceStore } from "./data/resource-store.js";

const query: LdhopQuery<
  "?webid" | "?profileDocument" | "?preferencesFile" | "?name"
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
    predicate: vcard.fn,
    pick: "object",
    target: "?name",
  },
  {
    type: "match",
    subject: "?webid",
    predicate: foaf.name,
    pick: "object",
    target: "?name",
  },
];

@customElement("dtp-name")
export class DitupName extends LitElement {
  @property() webid?: string;
  @state() protected _name?: string;
  @property({ attribute: false }) store!: ResourceStore;

  private runner = new QueryRunner(() => this.store, query, {
    onVariableAdded: (variable, _, all) => this.handleVariable(variable, all),
    onVariableRemoved: (variable, _, all) => this.handleVariable(variable, all),
  });

  private handleVariable(variable: string, values: Set<import("n3").Term>) {
    if (variable === "?name") {
      this._name = findLiteral(values);
    }
  }

  protected updated(map: PropertyValues) {
    if (map.has("webid") || map.has("store")) {
      this._name = undefined;
      if (this.webid) {
        this.runner.run({ "?webid": new Set([this.webid]) });
      } else {
        this.runner.destroy();
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.runner.destroy();
  }

  render() {
    return html`${ifDefined(this._name)}`;
  }
}
