import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { reset } from "./styles/preflight";
import ditupLogoBlack from "/logo-black.svg";
import ditupLogoWhite from "/logo-white.svg";
import ditupLogo from "/logo.svg";
import ditupLogoRaw from "/logo.svg?raw";

@customElement("dtp-landing")
export class MyElement extends LitElement {
  render() {
    return html`
      <h1>ditup</h1>
      <p class="subtitle">do it together</p>
      <p class="tagline">turn ideas into collaborative action</p>
      <div class="logo">${unsafeHTML(ditupLogoRaw)}</div>
      <!-- <picture>
        <source srcset=${ditupLogoWhite} media="(prefers-color-scheme: dark)" />
        <source
          srcset=${ditupLogoBlack}
          media="(prefers-color-scheme: light)"
        />
        <img src=${ditupLogo} height=${200} class="logo" />
      </picture> -->
      <a class="button primary" href="https://docs.ditup.org">learn more</a>
    `;
  }

  static styles = [
    reset,
    css`
      :host {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
      }

      h1,
      .subtitle,
      .tagline {
        text-align: center;
      }

      h1 {
        font-size: 2rem;
        color: var(--color-primary);
      }

      .subtitle,
      .tagline {
        font-size: 1.25rem;
      }

      .logo svg {
        height: 150px;
        fill: var(--color-text);
      }

      .logo svg #caps {
        fill: var(--color-primary);
      }

      .button {
        padding: 0.5rem 1rem;
        background-color: var(--color-surface);
        border-radius: var(--border-radius);
      }

      .button:hover {
        filter: brightness(0.9);
      }

      .button.primary {
        background-color: var(--color-primary);
        font-size: 1.25rem;
      }
    `,
  ];
}
