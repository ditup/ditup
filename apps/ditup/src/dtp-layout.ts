import { logout } from "@inrupt/solid-client-authn-browser";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import encodeURIComponent from "strict-uri-encode";
import "./dtp-logo.js";

@customElement("dtp-layout")
export class DitupLayout extends LitElement {
  @property() webid = "";

  render() {
    return html`<header class="header">
        <a href="/"><dtp-logo class="logo"></dtp-logo></a>
        <a href="/profile/${encodeURIComponent(this.webid)}">${this.webid}</a>
        <button @click=${this._signout}>sign out</button>
      </header>
      <main>
        <slot></slot>
      </main>`;
  }

  private _signout() {
    logout();
  }

  static styles = css`
    .logo {
      --size: 2rem;
      justify-self: flex-start;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      padding: 1rem;
    }

    .header > :first-child {
      margin-right: auto;
    }
  `;
}
