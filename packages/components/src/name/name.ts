import { ldhop } from '@ldhop/core'
import { html, LitElement, type PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { foaf, rdfs, space, vcard } from 'rdf-namespaces'
import { findLiteral, QueryRunner } from '../engine/query-runner.js'
import type { ResourceStore } from '../engine/resource-store.js'
import nameShape from './name.shacl.ttl?raw'

const query = ldhop('?webid')
  .match('?webid', rdfs.seeAlso)
  .o('?profileDocument')
  .add()
  .match('?webid', space.preferencesFile)
  .o('?preferencesFile')
  .add()
  .match('?webid', vcard.fn)
  .o('?name')
  .match('?webid', foaf.name)
  .o('?name')
  .toArray()

@customElement('dtp-name')
export class DitupName extends LitElement {
  @property() webid?: string
  @state() protected _name?: string
  @property({ attribute: false }) store!: ResourceStore

  _shape = nameShape

  get shape() {
    return this._shape
  }

  private runner = new QueryRunner(() => this.store, query, {
    onVariableAdded: (variable, _, all) => this.handleVariable(variable, all),
    onVariableRemoved: (variable, _, all) => this.handleVariable(variable, all),
  })

  private handleVariable(variable: string, values: Set<import('n3').Term>) {
    if (variable === '?name') {
      this._name = findLiteral(values)
    }
  }

  protected updated(map: PropertyValues) {
    if (map.has('webid') || map.has('store')) {
      this._name = undefined
      if (this.webid) {
        this.runner.run({ '?webid': new Set([this.webid]) })
      } else {
        this.runner.destroy()
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.runner.destroy()
  }

  render() {
    return html`${ifDefined(this._name)}`
  }
}

// The name shape is not used in any way for the component contract, yet.
export { nameShape }
