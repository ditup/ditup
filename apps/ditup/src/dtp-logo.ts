import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import ditupLogoRaw from "/logo.svg?raw";

@customElement("dtp-logo")
export class DitupLogo extends LitElement {
  render() {
    return html`<div class="logo">${unsafeHTML(ditupLogoRaw)}</div> `;
  }

  static styles = css`
    :host {
      --size: 150px;
    }

    .logo svg {
      height: var(--size);
      fill: var(--color-text);
    }

    .logo svg #caps {
      fill: var(--color-primary);
    }
  `;
}
