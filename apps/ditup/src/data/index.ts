import { fetch } from "@inrupt/solid-client-authn-browser";
import { SimpleResourceStore } from "./simple-resource-store";

export const store = new SimpleResourceStore(fetch);
export const unauthStore = new SimpleResourceStore(
  globalThis.fetch.bind(globalThis)
);
