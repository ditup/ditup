import { ldhop, type Variable } from '@ldhop/core'
import { css, html, LitElement, type PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import type { Term } from 'n3'
import { foaf, rdfs, space } from 'rdf-namespaces'
import { unauthStore } from './data/index.js'
import { QueryRunner, type ResourceStore } from '@ditup/web-components/engine'
import '@ditup/web-components/topic'

const query = ldhop('?webid')
  .match('?webid', rdfs.seeAlso)
  .o('?profileDocument')
  .add()
  .match('?webid', space.preferencesFile)
  .o('?preferencesFile')
  .add()
  .match('?webid', foaf.topic_interest)
  .o('?interest')
  .toArray()

@customElement('dtp-interests')
export class DitupInterests extends LitElement {
  @property() webid?: string
  @state() protected _interests?: Term[]
  @property({ attribute: false }) store?: ResourceStore

  private handleVariable = (v: Variable, _: unknown, all: Set<Term>) => {
    if (v === '?interest') this._interests = Array.from(all)
  }
  private _runner = new QueryRunner(() => this.store!, query, {
    onVariableAdded: this.handleVariable,
    onVariableRemoved: this.handleVariable,
  })

  protected async updated(map: PropertyValues) {
    if (map.has('webid') || map.has('store')) {
      this._interests = []
      if (this.webid) {
        this._runner.run({ '?webid': new Set([this.webid]) })
      } else {
        this._runner.destroy()
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._runner.destroy()
  }

  render() {
    return html`${Array.from(this._interests ?? new Set<Term>()).map(
      (interest) =>
        interest.termType === 'NamedNode'
          ? html`<dtp-topic
              uri=${interest.id}
              .store=${unauthStore}
            ></dtp-topic>`
          : undefined,
    )}`
  }

  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem 1rem;
    }
  `
}
