# Document 1: Data Model / Ontology

---

## Overview

All user data lives on user's Solid pod. Index server stores pointers and aggregated discovery data, not primary content.

---

## Namespaces

```
@prefix ditup: <https://ditup.org/ontology#> .
@prefix solid: <http://www.w3.org/ns/solid/terms#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix wd: <http://www.wikidata.org/entity/> .
```

---

## Core Entities

### Profile

Location: User's pod at `/public/ditup/profile`

```turtle
<#me>
  a ditup:Profile ;
  foaf:name "Maria" ;
  ditup:bio "Urban planning enthusiast" ;
  ditup:location [
    a geo:Point ;
    geo:lat "52.5200" ;
    geo:long "13.4050" ;
    ditup:radius "20"^^xsd:integer ;  # km
    ditup:locationLabel "Berlin, Germany"
  ] ;
  ditup:interests (
    wd:Q3196  # cycling
    wd:Q10930898  # urban gardening
    wd:Q5869807  # climate activism
  ) ;
  ditup:openTo (
    ditup:LocalMeetups
    ditup:OnlineDiscussion
    ditup:ProjectCollaboration
  ) ;
  ditup:profileVisibility ditup:Public ;
  dcterms:created "2024-01-15T10:00:00Z"^^xsd:dateTime ;
  dcterms:modified "2024-06-20T14:30:00Z"^^xsd:dateTime .
```

### Issue

Location: User's pod at `/public/ditup/issues/` or `/private/ditup/issues/`

```turtle
<#issue-001>
  a ditup:Issue ;
  dcterms:title "Dangerous intersection at Main St and Oak Ave" ;
  dcterms:description "No crosswalk, poor visibility, multiple near-misses observed" ;
  ditup:location [
    a geo:Point ;
    geo:lat "52.5180" ;
    geo:long "13.4010" ;
    ditup:locationLabel "Main St & Oak Ave, Berlin"
  ] ;
  ditup:photos (
    <./photos/intersection-1.jpg>
    <./photos/intersection-2.jpg>
  ) ;
  ditup:topics (
    wd:Q3196  # cycling
    wd:Q109620  # pedestrian safety
  ) ;
  ditup:status ditup:Open ;
  ditup:visibility ditup:Public ;
  dcterms:creator <https://maria.solidpod.example/profile#me> ;
  dcterms:created "2024-03-10T09:15:00Z"^^xsd:dateTime ;
  dcterms:modified "2024-03-10T09:15:00Z"^^xsd:dateTime .
```

### Idea

Location: User's pod at `/public/ditup/ideas/` or `/private/ditup/ideas/`

```turtle
<#idea-001>
  a ditup:Idea ;
  dcterms:title "Temporary crosswalk with paint and cones" ;
  dcterms:description "Guerrilla urbanism approach - paint crosswalk, add cones, document response" ;
  ditup:forIssue <https://maria.solidpod.example/issues#issue-001> ;
  ditup:resourcesNeeded "White paint, traffic cones, 3-4 people, 2 hours" ;
  ditup:topics (
    wd:Q3196  # cycling
    wd:Q109620  # pedestrian safety
    wd:Q1423755  # tactical urbanism
  ) ;
  ditup:visibility ditup:Public ;
  dcterms:creator <https://jan.solidpod.example/profile#me> ;
  dcterms:created "2024-03-12T16:00:00Z"^^xsd:dateTime .
```

### Action

Location: Proposer's pod at `/public/ditup/actions/`

```turtle
<#action-001>
  a ditup:Action ;
  dcterms:title "Paint temporary crosswalk at Main St" ;
  dcterms:description "Meet at the intersection, paint crosswalk, document with photos" ;
  ditup:forIssue <https://maria.solidpod.example/issues#issue-001> ;
  ditup:forIdea <https://jan.solidpod.example/ideas#idea-001> ;
  ditup:when "2024-03-23T14:00:00Z"^^xsd:dateTime ;
  ditup:where [
    a geo:Point ;
    geo:lat "52.5180" ;
    geo:long "13.4010" ;
    ditup:locationLabel "Main St & Oak Ave, meet at NE corner"
  ] ;
  ditup:what "Bring: white paint, brushes, traffic cones if you have them" ;
  ditup:minParticipants "4"^^xsd:integer ;
  ditup:maxParticipants "10"^^xsd:integer ;
  ditup:status ditup:Proposed ;  # Proposed | Confirmed | Completed | Cancelled
  ditup:organizer <https://jan.solidpod.example/profile#me> ;
  dcterms:created "2024-03-15T11:00:00Z"^^xsd:dateTime .
```

### Commitment

Location: Committer's pod at `/private/ditup/commitments/` or `/public/ditup/commitments/`

```turtle
<#commitment-001>
  a ditup:Commitment ;
  ditup:toAction <https://jan.solidpod.example/actions#action-001> ;
  ditup:status ditup:Committed ;  # Committed | Withdrew | Attended | NoShow
  ditup:commitDate "2024-03-16T09:00:00Z"^^xsd:dateTime ;
  ditup:visibility ditup:Private .
```

### Attendance Record

Location: User's pod at `/private/ditup/attendance/` or `/public/ditup/attendance/`

```turtle
<#attendance-001>
  a ditup:AttendanceRecord ;
  ditup:forAction <https://jan.solidpod.example/actions#action-001> ;
  ditup:attended true ;
  ditup:confirmedBy (
    <https://maria.solidpod.example/profile#me>
    <https://alex.solidpod.example/profile#me>
  ) ;
  ditup:recordDate "2024-03-23T17:00:00Z"^^xsd:dateTime .
```

### Attendance Confirmation

Location: Confirmer's pod at `/public/ditup/confirmations/`

```turtle
<#confirmation-001>
  a ditup:AttendanceConfirmation ;
  ditup:forAction <https://jan.solidpod.example/actions#action-001> ;
  ditup:confirmedAttendees (
    <https://jan.solidpod.example/profile#me>
    <https://maria.solidpod.example/profile#me>
    <https://alex.solidpod.example/profile#me>
  ) ;
  ditup:confirmedBy <https://maria.solidpod.example/profile#me> ;
  dcterms:created "2024-03-23T17:30:00Z"^^xsd:dateTime .
```

### Action Outcome

Location: Organizer's pod at `/public/ditup/outcomes/`

```turtle
<#outcome-001>
  a ditup:ActionOutcome ;
  ditup:forAction <https://jan.solidpod.example/actions#action-001> ;
  ditup:resolvedIssue <https://maria.solidpod.example/issues#issue-001> ;
  dcterms:description "Successfully painted crosswalk. City noticed within 3 days. Formal crosswalk installed 2 weeks later." ;
  ditup:beforePhotos (
    <./photos/before-1.jpg>
  ) ;
  ditup:afterPhotos (
    <./photos/after-1.jpg>
    <./photos/after-2.jpg>
  ) ;
  ditup:participantCount "5"^^xsd:integer ;
  dcterms:created "2024-03-23T18:00:00Z"^^xsd:dateTime .
```

---

## Pod Structure

### User pod layout

```
/profile
  card#me              # WebID profile

/public/ditup/
  profile              # ditup profile
  issues/              # public issues
  ideas/               # public ideas
  actions/             # proposed actions
  commitments/         # public commitments (optional)
  attendance/          # public attendance records (optional)
  confirmations/       # attendance confirmations given to others
  outcomes/            # action outcomes

/private/ditup/
  issues/              # private issues (drafts, personal notes)
  ideas/               # private ideas
  commitments/         # private commitments
  attendance/          # private attendance records
  settings             # user preferences
```

---

## Index Server Data

Index stores pointers and aggregated data for discovery. Does not store primary content.

### Issue Index Entry

```turtle
<#index-issue-001>
  a ditup:IssueIndexEntry ;
  ditup:sourceUri <https://maria.solidpod.example/issues#issue-001> ;
  ditup:location [
    geo:lat "52.5180" ;
    geo:long "13.4010"
  ] ;
  ditup:topics ( wd:Q3196 wd:Q109620 ) ;
  ditup:creator <https://maria.solidpod.example/profile#me> ;
  ditup:status ditup:Open ;
  dcterms:created "2024-03-10T09:15:00Z"^^xsd:dateTime ;
  ditup:lastVerified "2024-06-01T00:00:00Z"^^xsd:dateTime .
```

### Profile Index Entry

```turtle
<#index-profile-001>
  a ditup:ProfileIndexEntry ;
  ditup:sourceUri <https://maria.solidpod.example/profile#me> ;
  ditup:location [
    geo:lat "52.5200" ;
    geo:long "13.4050" ;
    ditup:radius "20"^^xsd:integer
  ] ;
  ditup:interests ( wd:Q3196 wd:Q10930898 wd:Q5869807 ) ;
  ditup:openTo ( ditup:LocalMeetups ditup:ProjectCollaboration ) ;
  ditup:lastVerified "2024-06-01T00:00:00Z"^^xsd:dateTime .
```

### Aggregated Reputation (computed by index)

```turtle
<#reputation-001>
  a ditup:ReputationSummary ;
  ditup:forProfile <https://maria.solidpod.example/profile#me> ;
  ditup:totalCommitments "15"^^xsd:integer ;
  ditup:totalAttendances "14"^^xsd:integer ;
  ditup:attendanceRate "0.93"^^xsd:decimal ;
  ditup:issuesDocumented "23"^^xsd:integer ;
  ditup:ideasProposed "8"^^xsd:integer ;
  ditup:actionsOrganized "3"^^xsd:integer ;
  ditup:lastComputed "2024-06-01T00:00:00Z"^^xsd:dateTime .
```

---

## Entity Relationships

```
Profile
  └── creates → Issue (many)
  └── creates → Idea (many)
  └── proposes → Action (many)
  └── makes → Commitment (many)
  └── has → AttendanceRecord (many)
  └── gives → AttendanceConfirmation (many)

Issue
  └── has → Idea (many, from different users)
  └── has → Action (many)
  └── resolved by → ActionOutcome (optional)

Idea
  └── for → Issue (one)
  └── has → Action (many)

Action
  └── for → Issue (one, optional)
  └── for → Idea (one, optional)
  └── has → Commitment (many)
  └── has → ActionOutcome (one, optional)

Commitment
  └── to → Action (one)
  └── by → Profile (one)

AttendanceRecord
  └── for → Action (one)
  └── confirmed by → Profile (many)

AttendanceConfirmation
  └── for → Action (one)
  └── confirms → Profile (many)
  └── by → Profile (one)
```

---

## Data Flow

### Creating public issue

1. User creates issue on their pod at `/public/ditup/issues/`
2. User sends notification to index inbox
3. Index creates IssueIndexEntry with pointer to source
4. Index makes issue discoverable via geographic/topic search

### Commitment flow

1. User sees action via index discovery
2. User creates Commitment on their pod
3. User sends notification to action organizer
4. User optionally notifies index (for action participant count)
5. Organizer can see list of committed users

### Attendance verification

1. After action time, participants prompted to confirm attendance
2. Each participant creates AttendanceConfirmation listing who they saw
3. Cross-referenced: user marked attended if 2+ others confirm
4. AttendanceRecord updated on user's pod
5. Index recomputes ReputationSummary

---

## Privacy Considerations

| Data               | Default                        | User control                   |
| ------------------ | ------------------------------ | ------------------------------ |
| Profile            | Not indexed until user opts in | Full control over visibility   |
| Issue              | Private                        | Per-item public/private toggle |
| Idea               | Private                        | Per-item public/private toggle |
| Commitment         | Private                        | Can make public                |
| Attendance         | Private                        | Can make public for reputation |
| Reputation summary | Not displayed                  | User enables public display    |

**Index never stores:**

- Private items
- Full content (only pointers and metadata)
- Data without user consent

**Index stores:**

- Pointers to public items
- Location/topic metadata for search
- Aggregated reputation (computed from public attendance records)

---

## Ontology Status

This ontology is draft. Consider:

- Aligning with existing ontologies where possible (FOAF, Dublin Core, GeoSPARQL)
- Community input on vocabulary terms
- Versioning strategy for ontology evolution

---

---

---
