import "@awesome.me/webawesome/dist/components/avatar/avatar.js";
import { LdhopEngine, run, type LdhopQuery } from "@ldhop/core";
import { css, html, LitElement, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { foaf, rdfs, space, vcard } from "rdf-namespaces";
import { authFetch } from "./dtp-signin";

const query: LdhopQuery<
  "?webid" | "?profileDocument" | "?preferencesFile" | "?photo" | "?name"
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
    predicate: vcard.hasPhoto,
    pick: "object",
    target: "?photo",
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

@customElement("dtp-avatar")
export class DitupAvatar extends LitElement {
  @property() webid?: string;
  @property() shape: "circle" | "square" | "rounded" = "circle";

  @state()
  protected _name?: string;
  @state()
  protected _photo?: string;
  @state()
  protected _photoBlobUrl?: string;

  protected async updated(map: PropertyValues) {
    if (map.has("webid")) {
      if (this.webid) {
        const engine = new LdhopEngine(query, {
          "?webid": new Set([this.webid]),
        });
        await run(engine, authFetch);
        const nameNodes = engine.getVariable("?name");
        const photoNodes = engine.getVariable("?photo");

        for (const node of nameNodes) {
          if (node.termType === "Literal") {
            this._name = node.value;
            break;
          }
        }
        for (const node of photoNodes) {
          if (node.termType === "NamedNode") {
            this._photo = node.value;
            break;
          }
        }
      }
    }
    if (map.has("_photo")) {
      if (map.has("_photo")) {
        if (this._photoBlobUrl) {
          URL.revokeObjectURL(this._photoBlobUrl);
          this._photoBlobUrl = undefined;
        }

        if (this._photo) {
          const response = await authFetch(this._photo);
          if (response.ok) {
            const blob = await response.blob();
            this._photoBlobUrl = URL.createObjectURL(blob);
          }
        }
      }
    }
  }

  render() {
    const initials = this._name
      ?.split(/\s+/)
      .map((w) => w[0])
      .join("");

    return html`<wa-avatar
      initials=${ifDefined(initials)}
      image=${ifDefined(this._photoBlobUrl)}
      label="Avatar of ${ifDefined(this._name)}"
      shape=${this.shape}
    ></wa-avatar>`;
  }

  static styles = css`
    :host {
      --avatar-size: var(--size);
    }

    wa-avatar {
      --size: var(--avatar-size, 3rem);
    }
  `;
}
