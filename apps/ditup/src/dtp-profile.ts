import "@awesome.me/webawesome/dist/components/copy-button/copy-button.js";
// import "@awesome.me/webawesome/dist/components/qr-code/qr-code.js";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import "./dtp-avatar.js";
import "./dtp-interests.js";
import "./dtp-name.js";

@customElement("dtp-profile")
export class DitupProfile extends LitElement {
  @property()
  webid?: string;

  render() {
    return html`
      <dtp-name webid=${ifDefined(this.webid)}></dtp-name>
      <div>
        ${this.webid}
        <wa-copy-button value=${ifDefined(this.webid)}></wa-copy-button>
      </div>
      <!-- <wa-qr-code value=${ifDefined(this.webid)}></wa-qr-code> -->
      <dtp-avatar webid=${ifDefined(this.webid)} shape="square"></dtp-avatar>
      <dtp-interests webid=${ifDefined(this.webid)}></dtp-interests>
    `;
  }

  static styles = css`
    dtp-avatar {
      --size: 200px;
    }

    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  `;
}
