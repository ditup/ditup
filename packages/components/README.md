# @ditup/web-components

## General interface of RDF components

In general, there are:

- UI components that are independent of RDF. They have certain interfaces for reading or writing data.
- RDF component. A SHACL shape defines what data the component expects to read or write.

RDF components are interesting going forward.

Notes:

- The shapes advertised by different RDF components can be additive and used to advertise needs of a common component.

### RDF components

RDF components have RDF dataset as input.
They are able to listen to changes in the relevant part of the dataset and update accordingly.

RDF dataset is in its pure form: independent of application layer protocol like HTTP. Actual data fetching is handled in other parts of the app.

```txt
-------------
| Component |
|...........|
| IRI+shape |
-------------------
| Component |     |
|...........|.....|----------
| IRI+shape |     | UI      |
------------------|----------
| RDF Dataset     | non-RDF |
----------------------------|
| RESOURCES - RAW DATA      |
-----------------------------
```

Querying works somewhere along this structure. When component declares its IRI and shape, it's developer's responsibility to add these data into the dataset. The components should be query-agnostic.
