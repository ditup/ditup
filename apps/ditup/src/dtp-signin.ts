import { fetch, login } from "@inrupt/solid-client-authn-browser";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dtp-signin-ui")
export class DitupSigninUi extends LitElement {
  render() {
    return html`
      <form @submit=${this._submit}>
        <input required type="url" name="webidOrIdp" />
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
  render() {
    return html`<dtp-signin-ui @confirm=${this._confirm}></dtp-signin-ui>`;
  }

  private async _confirm(e: CustomEvent<{ data: { webidOrIdp: string } }>) {
    // save current url to session storage so we can go back to it after login
    globalThis.sessionStorage.setItem("previousUrl", window.location.href);

    await login({
      oidcIssuer: e.detail.data.webidOrIdp,
      redirectUrl: new URL("/", window.location.href).toString(),
      clientName: "ditup",
      clientId: new URL("/clientid.jsonld", window.location.href).toJSON(),
    });
  }
}

export const authFetch = fetch;
