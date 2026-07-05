import '@awesome.me/webawesome/dist/components/dialog/dialog.js'
import type WaDialog from '@awesome.me/webawesome/dist/components/dialog/dialog.js'
import '@awesome.me/webawesome/dist/styles/themes/default.css'
import { css, html, LitElement } from 'lit'
import { customElement, query } from 'lit/decorators.js'
import './dtp-logo.js'
import './dtp-signin.js'
import { reset } from './styles/preflight'
import { localized, msg } from '@lit/localize'
import './dtp-language-selector.js'

@customElement('dtp-landing')
@localized()
export class DitupLanding extends LitElement {
  render() {
    return html`
      <dtp-language-selector></dtp-language-selector>
      <h1>ditup</h1>
      <p class="subtitle">${msg('do it together')}</p>
      <p class="tagline">${msg('turn ideas into collaborative action')}</p>
      <dtp-logo></dtp-logo>
      <a class="button primary" href="https://docs.ditup.org"
        >${msg('learn more')}</a
      >
      <button class="button" @click=${this._startSignin}>
        ${msg('sign in')}
      </button>

      <wa-dialog label=${msg('Sign in with Solid')} id="signin-dialog">
        <dtp-signin></dtp-signin>
      </wa-dialog>
    `
  }

  @query('#signin-dialog')
  _signinDialog?: WaDialog

  private _startSignin() {
    if (this._signinDialog) this._signinDialog.open = true
  }

  static styles = [
    reset,
    css`
      #signin-dialog,
      ::part(dialog) {
        color: var(--color-text);
      }

      :host {
        /* margin: 0 auto; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        min-height: 100vh;
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
        font-size: 1.25rem;
        cursor: pointer;
      }

      .button:hover {
        filter: brightness(0.9);
      }

      .button.primary {
        background-color: var(--color-primary);
      }

      dtp-language-selector {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
    `,
  ]
}
