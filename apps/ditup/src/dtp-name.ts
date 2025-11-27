import "@awesome.me/webawesome/dist/components/avatar/avatar.js";
import { LdhopEngine, run, type LdhopQuery } from "@ldhop/core";
import { html, LitElement, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { foaf, rdfs, space, vcard } from "rdf-namespaces";
import { authFetch } from "./dtp-signin.js";

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

  protected async updated(map: PropertyValues) {
    if (map.has("webid")) {
      if (this.webid) {
        const engine = new LdhopEngine(query, {
          "?webid": new Set([this.webid]),
        });
        await run(engine, authFetch);
        const nameNodes = engine.getVariable("?name");

        for (const node of nameNodes) {
          if (node.termType === "Literal") {
            this._name = node.value;
            break;
          }
        }
      }
    }
  }

  render() {
    return html`${ifDefined(this._name)}`;
  }
}
