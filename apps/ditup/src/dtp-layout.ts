import { logout } from '@inrupt/solid-client-authn-browser'
import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import encodeURIComponent from 'strict-uri-encode'
import { store } from './data/index.js'
import './dtp-avatar.js'
import './dtp-logo.js'
import './dtp-language-selector.js'
import { localized, msg } from '@lit/localize'

@customElement('dtp-layout')
@localized()
export class DitupLayout extends LitElement {
  @property() webid = ''

  render() {
    return html`<header class="header">
        <a href="/"><dtp-logo class="logo"></dtp-logo></a>
        <dtp-language-selector></dtp-language-selector>
        <a href="/profile/${encodeURIComponent(this.webid)}">
          <dtp-avatar webid=${this.webid} .store=${store}></dtp-avatar>
        </a>
        <button @click=${this._signout}>${msg('sign out')}</button>
      </header>
      <main>
        <slot></slot>
      </main>`
  }

  private _signout() {
    logout()
  }

  static styles = css`
    .logo {
      --size: 2rem;
      justify-self: flex-start;
    }

    dtp-avatar {
      --size: 2rem;
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
  `
}
