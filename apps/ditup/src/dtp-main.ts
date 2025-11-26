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
    handleIncomingRedirect({
      restorePreviousSession: true,
    }).then((sessionInfo) => {
      this._info = sessionInfo;
    });
    this._session = getDefaultSession();
    this._session.events.addListener(EVENTS.LOGOUT, this._updateSessionInfo);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._session?.events.removeListener(
      EVENTS.LOGOUT,
      this._updateSessionInfo
    );
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
