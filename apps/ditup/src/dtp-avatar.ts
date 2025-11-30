import "@awesome.me/webawesome/dist/components/avatar/avatar.js";
import { type LdhopQuery } from "@ldhop/core";
import { css, html, LitElement, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import type { Term } from "n3";
import { foaf, rdfs, space, vcard } from "rdf-namespaces";
import { findLiteral, findNamedNode, QueryRunner } from "./data/query-runner";
import type {
  ResourceStore,
  ResourceStoreUnsubscribe,
} from "./data/resource-store";

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
  @property({ attribute: false }) store!: ResourceStore;
  @state()
  protected _name?: string;
  @state()
  protected _photo?: string;
  @state()
  protected _photoBlobUrl?: string;

  private photoUnsub?: ResourceStoreUnsubscribe;

  private runner = new QueryRunner(() => this.store, query, {
    onVariableAdded: (variable, _, all) => this.handleVariable(variable, all),
    onVariableRemoved: (variable, _, all) => this.handleVariable(variable, all),
  });

  private handleVariable(variable: string, values: Set<Term>) {
    if (variable === "?name") {
      this._name = findLiteral(values);
    }
    if (variable === "?photo") {
      this._photo = findNamedNode(values);
    }
  }

  protected updated(map: PropertyValues) {
    if (map.has("webid") || map.has("store")) {
      this._name = undefined;
      this._photo = undefined;
      if (this.webid) {
        this.runner.run({ "?webid": new Set([this.webid]) });
      } else {
        this.runner.destroy();
      }
    }

    if (map.has("_photo")) {
      this.updatePhoto();
    }

    if (map.has("_photoBlobUrl")) {
      const old = map.get("_photoBlobUrl") as string | undefined;
      if (old) URL.revokeObjectURL(old);
    }
  }

  private updatePhoto() {
    this.photoUnsub?.();
    this.photoUnsub = undefined;

    if (this._photo) {
      this.photoUnsub = this.store.subscribe<Blob>(
        this._photo,
        { accept: "image/*" },
        (result) => {
          if (!result.loading && !result.error) {
            this._photoBlobUrl = URL.createObjectURL(result.data);
          }
        }
      );
    } else {
      this._photoBlobUrl = undefined;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.runner.destroy();
    this.photoUnsub?.();
    if (this._photoBlobUrl) URL.revokeObjectURL(this._photoBlobUrl);
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
