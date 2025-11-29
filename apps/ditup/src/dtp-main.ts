import "@awesome.me/webawesome/dist/components/spinner/spinner.js";
import "@awesome.me/webawesome/dist/styles/themes/default.css";
import {
  EVENTS,
  getDefaultSession,
  handleIncomingRedirect,
  Session,
  type ISessionInfo,
} from "@inrupt/solid-client-authn-browser";
import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import "./dtp-landing.js";
import "./dtp-layout.js";
import "./dtp-router.js";

@customElement("dtp-main")
export class DitupMain extends LitElement {
  @state()
  private _info?: ISessionInfo;
  private _session?: Session;
  private _updateSessionInfo = () => {
    this._info = { ...getDefaultSession().info };
  };

  connectedCallback() {
    super.connectedCallback();

    // authenticate after redirect
    handleIncomingRedirect({
      restorePreviousSession: true,
    }).then((sessionInfo) => {
      this._info = sessionInfo;
    });

    this._session = getDefaultSession();
    this._session.events.addListener(EVENTS.LOGOUT, this._updateSessionInfo);

    // redirect to previous url after refresh
    this._session.events.addListener(EVENTS.SESSION_RESTORED, this._redirect);

    // redirect to previous url after login
    this._session.events.addListener(
      EVENTS.LOGIN,
      this._redirectFromSessionStorage
    );

    // clear previous url after error
    this._session.events.addListener(EVENTS.ERROR, this._clearPreviousUrl);
  }

  protected _redirect(url: string | null) {
    if (url && new URL(url).hostname === globalThis.location.hostname)
      // TODO figure out whether to use pushState or replaceState
      globalThis.history.replaceState(null, "", url);
  }

  protected _redirectFromSessionStorage = () => {
    const previousUrl = globalThis.sessionStorage.getItem("previousUrl");
    globalThis.sessionStorage.removeItem("previousUrl");
    this._redirect(previousUrl);
  };

  protected _clearPreviousUrl() {
    globalThis.sessionStorage.removeItem("previousUrl");
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // clear event listeners
    this._session?.events.removeListener(
      EVENTS.LOGOUT,
      this._updateSessionInfo
    );
    this._session?.events.removeListener(
      EVENTS.SESSION_RESTORED,
      this._redirect
    );
    this._session?.events.removeListener(
      EVENTS.LOGIN,
      this._redirectFromSessionStorage
    );
    this._session?.events.removeListener(EVENTS.ERROR, this._clearPreviousUrl);
  }

  render() {
    if (!this._info) return html`<wa-spinner></wa-spinner>`;
    if (!this._info.isLoggedIn) return html`<dtp-landing></dtp-landing>`;
    if (this._info.isLoggedIn)
      return html`<dtp-layout webid=${ifDefined(this._info.webId)}
        ><dtp-router></dtp-router
      ></dtp-layout>`;
    throw new Error("Unexpected session state");
  }
}
