import { configureLocalization } from '@lit/localize'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale: 'en',
  targetLocales: ['cs', 'pl'],
  loadLocale: (locale) => import(`./generated/locales/${locale}.ts`),
})

const languages = ['en', 'cs', 'pl'] as const

@customElement('dtp-language-selector')
export class DitupLanguageSelector extends LitElement {
  render() {
    return html`<select
      data-testid="language-selector"
      @change=${this._changeLanguage}
      aria-label="select language"
    >
      ${languages.map((lang) => html`<option value=${lang}>${lang}</option>`)}
    </select>`
  }

  private async _changeLanguage(e: Event) {
    const value = (e.target as HTMLSelectElement)
      .value as (typeof languages)[number]
    document.documentElement.lang = value
    await setLocale(value)
    switch (value) {
      case 'en': {
        await import(`@awesome.me/webawesome/dist/translations/en.js`)
        break
      }
      case 'cs': {
        await import(`@awesome.me/webawesome/dist/translations/cs.js`)
        break
      }
      case 'pl': {
        await import(`@awesome.me/webawesome/dist/translations/pl.js`)
        break
      }
      default:
    }
  }
}
