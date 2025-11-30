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
export function isInterest(x: Interest | EmptyObject): x is Interest {
  return "uri" in x;
}
export function processWikidataEntity({
  id,
  uri,
  data,
  language,
}: {
  id: string;
  uri: string;
  data: WikidataEntitiesResult;
  language: string;
}): Interest | EmptyObject {
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
}
export const wikidataRegex =
  /^https?:\/\/(w{3}\.)?wikidata\.org\/entity\/([A-Z0-9]*)\/?$/;
export interface WikidataEntitiesResult {
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
