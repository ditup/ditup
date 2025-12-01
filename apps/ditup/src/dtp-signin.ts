import { fetch, login } from "@inrupt/solid-client-authn-browser";
import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

const LAST_OIDC_ISSUER = "lastOidcIssuer";
@customElement("dtp-signin-ui")
export class DitupSigninUi extends LitElement {
  @property() defaultValue?: string;
  render() {
    return html`
      <form @submit=${this._submit}>
        <input
          required
          type="url"
          name="webidOrIdp"
          value=${ifDefined(this.defaultValue)}
        />
        <button type="submit">continue</button>
      </form>
    `;
  }

  private _submit(e: SubmitEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries()) as {
      webidOrIdp: string;
    };
    const event = new CustomEvent("confirm", { detail: { data: formValues } });
    this.dispatchEvent(event);
  }
}

@customElement("dtp-signin")
export class DitupSignin extends LitElement {
  @state() private _defaultValue?: string;
  connectedCallback() {
    super.connectedCallback();
    this._defaultValue =
      globalThis.localStorage.getItem(LAST_OIDC_ISSUER) ?? undefined;
  }
  render() {
    return html`<dtp-signin-ui
      @confirm=${this._confirm}
      defaultValue=${ifDefined(this._defaultValue)}
    ></dtp-signin-ui>`;
  }

  private async _confirm(e: CustomEvent<{ data: { webidOrIdp: string } }>) {
    // save current url to session storage so we can go back to it after login
    globalThis.sessionStorage.setItem("previousUrl", window.location.href);
    try {
      globalThis.localStorage.setItem(
        LAST_OIDC_ISSUER,
        e.detail.data.webidOrIdp
      );
      await login({
        oidcIssuer: e.detail.data.webidOrIdp,
        redirectUrl: new URL("/", window.location.href).toString(),
        clientName: "ditup",
        clientId: import.meta.env.PROD
          ? new URL("/clientid.jsonld", window.location.href).toJSON()
          : undefined,
      });
    } catch (e) {
      // todo toast
      console.error(e);
      globalThis.localStorage.removeItem(LAST_OIDC_ISSUER);
    }
  }
}

export const authFetch = fetch;
