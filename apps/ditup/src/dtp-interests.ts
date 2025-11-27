import "@awesome.me/webawesome/dist/components/avatar/avatar.js";
import "@awesome.me/webawesome/dist/components/popover/popover.js";
import { LdhopEngine, run, type LdhopQuery } from "@ldhop/core";
import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import type { Term } from "n3";
import { foaf, rdfs, space } from "rdf-namespaces";
import { authFetch } from "./dtp-signin";

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
export class DitupName extends LitElement {
  @property() webid?: string;
  @state() protected _interests?: Term[];

  protected async updated(map: PropertyValues) {
    if (map.has("webid")) {
      if (this.webid) {
        const engine = new LdhopEngine(query, {
          "?webid": new Set([this.webid]),
        });
        await run(engine, authFetch);
        this._interests = Array.from(engine.getVariable("?interest"));
      }
    }
  }

  render() {
    return html`${Array.from(this._interests ?? new Set<Term>()).map(
      (interest) =>
        interest.termType === "NamedNode"
          ? html`<dtp-topic uri=${interest.id}></dtp-topic>`
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

  protected async updated(changedProperties: PropertyValues) {
    if (changedProperties.has("uri")) {
      const result = await readInterest(this.uri, this.language);
      if (isInterest(result)) this._data = result;
    }
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

// TODO refactor out of here

type EmptyObject = Record<string, never>;
type URI = string;
export type Interest = {
  id?: string;
  uri: URI;
  label?: string;
  description?: string;
  aliases: string[];
  image?: URI;
  officialWebsite?: URI;
};
function isInterest(x: Interest | EmptyObject): x is Interest {
  return "uri" in x;
}

const readInterest = async (
  uri: URI,
  language: string
): Promise<Interest | EmptyObject> => {
  const id = uri.match(wikidataRegex)?.[2] ?? "";

  // currently, we resolve only wikidata interests
  if (!id) return {};

  const res = await fetch(
    `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${id}&languages=${language}&format=json&origin=*`
  );

  if (!res.ok) throw new Error("Fetching interest failed");

  const data: WikidataEntitiesResult = await res.json();

  if (!data || !data.entities) return {};

  const entity = data.entities[id];

  if (!entity) return {};

  const label = entity.labels[language]?.value;
  const description = entity.descriptions[language]?.value;
  const imageString = (entity.claims.P18 ?? []).map(
    (p) => p.mainsnak.datavalue?.value
  )[0];
  const logoImageString = (entity.claims.P154 ?? []).map(
    (p) => p.mainsnak.datavalue?.value
  )[0];
  const image =
    imageString &&
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
      imageString
    )}?width=300`;

  const logoImage =
    logoImageString &&
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
      logoImageString
    )}?width=300`;
  const officialWebsite = (entity.claims.P856 ?? []).map(
    (p) => p.mainsnak.datavalue?.value
  )[0];
  const aliases = (entity.aliases[language] ?? []).map(({ value }) => value);

  return {
    id,
    uri,
    label,
    aliases,
    description,
    officialWebsite,
    image: logoImage || image,
  };
};

const wikidataRegex =
  /^https?:\/\/(w{3}\.)?wikidata\.org\/entity\/([A-Z0-9]*)\/?$/;

interface WikidataEntitiesResult {
  entities: {
    [key: string]: {
      labels: { [language: string]: { value: string } };
      descriptions: { [language: string]: { value: string } };
      aliases: { [language: string]: { value: string }[] };
      claims: {
        P18?: {
          mainsnak: {
            datavalue?: { value: string };
            datatype: "commonsMedia";
          };
        }[];
        P154?: {
          mainsnak: {
            datavalue?: { value: string };
            datatype: "commonsMedia";
          };
        }[];
        P856?: {
          mainsnak: {
            datavalue?: { value: string };
            datatype: "url";
          };
        }[];
      };
    };
  };
}
