import { Router } from "@lit-labs/router";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./dtp-profile.js";

@customElement("dtp-router")
export class DitupRouter extends LitElement {
  private _routes = new Router(this, [
    { path: "/", render: () => html`<div>home</div>` },
    { path: "/profile", render: () => html`/profile` },
    {
      path: "/profile/:webid",
      render: ({ webid }) =>
        html`<dtp-profile webid=${decodeURIComponent(webid!)}></dtp-profile>`,
    },
    { path: "/*", render: () => html`404` },
  ]);

  render() {
    return html`${this._routes.outlet()}`;
  }
}
