# dtp-topic <Badge type="warning" text="Unstable" />

A web component that can display a wikidata topic as a tag.

```ts
import '@ditup/web-components/topic'

html`<dtp-topic uri="http://www.wikidata.org/entity/Q1"></dtp-topic>`
```

## Attributes & Properties

| name     | Type   | Description          | Default                       |
| :------- | :----- | :------------------- | :---------------------------- |
| uri      | string | Wikidata concept URI |                               |
| language | string | Language to display  | document.documentElement.lang |
