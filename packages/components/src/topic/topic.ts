import '@awesome.me/webawesome/dist/components/popover/popover.js'
import { LitElement, type PropertyValues, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import type {
  ResourceStore,
  ResourceStoreUnsubscribe,
} from '../engine/resource-store'
import {
  type Interest,
  wikidataRegex,
  processWikidataEntity,
  type WikidataEntitiesResult,
  isInterest,
} from './wikidata'

@customElement('dtp-topic')
export class DitupTopic extends LitElement {
  @property() uri!: string
  @property() language = 'en'
  @state() protected _data: Interest = { uri: this.uri, aliases: [] }
  @state() store?: ResourceStore

  private _unsubscribes = new Map<string, ResourceStoreUnsubscribe>()

  protected async updated(changedProperties: PropertyValues) {
    if (
      changedProperties.has('uri') ||
      changedProperties.has('store') ||
      changedProperties.has('language')
    ) {
      if (!this.store) return
      this._data = { uri: this.uri, aliases: [] }
      const id = this.uri.match(wikidataRegex)?.[2] ?? ''
      // currently, we resolve only wikidata interests
      if (!id) return

      const wdapiuri = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${id}&languages=${this.language}&format=json&origin=*`
      const unsubscribe = this.store?.subscribe(wdapiuri, {}, (result) => {
        if (!result.loading && !result.error) {
          const outcome = processWikidataEntity({
            id,
            uri: this.uri,
            data: result.data as WikidataEntitiesResult,
            language: this.language,
          })
          if (isInterest(outcome)) this._data = outcome
        }
      })
      this._unsubscribes.get(wdapiuri)?.()
      this._unsubscribes.set(wdapiuri, unsubscribe)
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    const unsubscribes = this._unsubscribes.values()
    for (const u of unsubscribes) u()
  }

  render() {
    return html`
      <button id="interest">
        ${this._data.label ?? this.uri.split('/').pop()}
      </button>
      <wa-popover for="interest">
        <div>
          <img src=${ifDefined(this._data.image)} alt="" />
          <header>
            <h3>
              ${this._data.label}
              <a href=${ifDefined(this._data?.uri)}>link</a>
            </h3>
            ${
              this._data.aliases.length > 0
                ? html`<div>${this._data.aliases.join(', ')}</div>`
                : nothing
            }
            ${
              this._data.officialWebsite
                ? html`<a
                    href=${ifDefined(this._data.officialWebsite)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ${this._data.officialWebsite}
                  </a>`
                : nothing
            }
          </header>
          <section>${this._data.description}</section>
        </div>
      </wa-popover>
    `
  }
}
