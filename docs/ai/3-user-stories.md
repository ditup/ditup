# Document 3: User Stories

---

## Persona Definitions

### Persona 1: Maria (Documenter)

**Demographics:** 32, urban planner, lives in Berlin
**Tech comfort:** High
**Motivation:** Notices urban issues professionally, wants personal archive
**Current tools:** Notion for notes, Twitter to complain, Google Maps to pin locations
**Frustration:** Scattered observations, no systematic way to track local issues

### Persona 2: Jan (Activist)

**Demographics:** 24, climate activist, lives in small city
**Tech comfort:** Medium
**Motivation:** Wants to find like-minded people locally
**Current tools:** Instagram, local Facebook groups
**Frustration:** Feels isolated, online communities don't lead to local action

### Persona 3: Alex (Casual Civic Person)

**Demographics:** 45, teacher, suburban area
**Tech comfort:** Low
**Motivation:** Occasionally notices problems, wants simple way to record
**Current tools:** Phone notes, sometimes Nextdoor
**Frustration:** Forgets observations, doesn't want complex tools

### Persona 4: Tomas (Organizer)

**Demographics:** 38, experienced community organizer
**Tech comfort:** Medium
**Motivation:** Better tools for coordinating local actions
**Current tools:** WhatsApp groups, spreadsheets, Meetup
**Frustration:** Fragmented tools, can't track who shows up reliably

---

## Phase 1 User Stories (MVP)

### Authentication

**US-1.1: Login with existing Solid pod**

```
As Maria
I want to login with my existing Solid pod
So that I can start using ditup without creating new account
```

Acceptance:

- Can enter pod URL
- Redirected to pod provider login
- After auth, returned to ditup logged in
- Session persists across browser close

**US-1.2: Create new Solid account**

```
As Alex
I want to create a Solid pod during signup
So that I don't need to understand Solid before starting
```

Acceptance:

- Option to create new pod if none exists
- Guided through pod provider selection
- Account created, returned to ditup logged in

**US-1.3: Logout**

```
As any user
I want to logout
So that others on shared device can't access my data
```

Acceptance:

- Clear logout button
- Session fully cleared
- Redirected to login page

---

### Profile

**US-2.1: Create basic profile**

```
As Maria
I want to set up my profile with location and interests
So that my documented content has context
```

Acceptance:

- Can set name, bio
- Can set location via map or text
- Can add interest topics from Wikidata
- Profile saved to pod

**US-2.2: Hide profile from discovery**

```
As Alex
I want to keep my profile hidden
So that I can use the documentation features without being discoverable
```

Acceptance:

- Toggle for profile visibility
- Hidden profile not submitted to any index
- Can still use all documentation features

**US-2.3: Edit profile**

```
As Maria
I want to update my profile later
So that I can change location or interests over time
```

Acceptance:

- All fields editable
- Changes saved immediately
- Old profile data not retained

---

### Issue Documentation

**US-3.1: Create issue quickly**

```
As Maria
I want to document an issue I notice in under 30 seconds
So that I can capture observations without breaking my flow
```

Acceptance:

- Minimal required fields (title only)
- Optional: description, photo, location, topics
- Save and add details later option
- Under 30 seconds for basic entry

**US-3.2: Add photo to issue**

```
As Alex
I want to take a photo of a problem and attach it
So that I have visual evidence
```

Acceptance:

- Camera access on mobile
- Gallery upload on all devices
- Photo preview before save
- Compression to reasonable size

**US-3.3: Pin issue to map**

```
As Maria
I want to mark exactly where the issue is
So that I can find it later and so the location is precise
```

Acceptance:

- Interactive map picker
- Option to use current location
- Option to search address
- Precise coordinates stored

**US-3.4: Tag issue with topics**

```
As Maria
I want to tag my issue with relevant topics
So that I can filter and organize my observations
```

Acceptance:

- Search Wikidata topics
- Select multiple topics
- Topics displayed on issue
- Can filter issues by topic later

**US-3.5: Keep issue private**

```
As Alex
I want to keep some issues private
So that I can document without anyone else seeing
```

Acceptance:

- Private/public toggle per issue
- Private is default
- Private issues never leave pod
- Clear visual indicator of status

**US-3.6: Make issue public**

```
As Maria
I want to publish some issues publicly
So that others might eventually discover them
```

Acceptance:

- Can toggle issue to public
- Warning about what public means
- Public issues eligible for future index (when built)
- Can revert to private

**US-3.7: Edit issue**

```
As Maria
I want to edit an issue I documented
So that I can add details or correct mistakes
```

Acceptance:

- All fields editable
- Photos can be added/removed
- Change history not required for MVP

**US-3.8: Delete issue**

```
As Alex
I want to delete an issue I no longer need
So that my archive stays relevant
```

Acceptance:

- Delete button with confirmation
- Soft delete (recoverable for 30 days)
- Removed from views immediately

**US-3.9: Archive issue**

```
As Maria
I want to mark an issue as resolved/archived
So that it's not cluttering my active view but I keep the record
```

Acceptance:

- Archive status option
- Archived issues hidden from default view
- Can view archived items via filter
- Can unarchive

---

### Idea Documentation

**US-4.1: Create idea**

```
As Maria
I want to document a solution idea
So that I don't forget it and can develop it over time
```

Acceptance:

- Create idea with title, description
- Private by default
- Optional: resources needed, topics
- Saved to pod

**US-4.2: Link idea to issue**

```
As Maria
I want to link my idea to an issue I documented
So that solutions are connected to problems
```

Acceptance:

- Optional issue link when creating idea
- Can link to any of own issues
- Link displayed on both idea and issue
- Can unlink later

**US-4.3: Document resources needed**

```
As Maria
I want to note what would be needed to implement my idea
So that I can plan ahead
```

Acceptance:

- Free text field for resources
- Optional field
- Displayed on idea view

---

### Dashboard

**US-5.1: View all issues as list**

```
As Maria
I want to see all my issues in a list
So that I can browse what I've documented
```

Acceptance:

- List of all issues (private and public)
- Shows title, date, status, location snippet
- Sorted by date (newest first default)
- Pagination or infinite scroll for many items

**US-5.2: View all issues on map**

```
As Maria
I want to see my issues plotted on a map
So that I can understand geographic patterns
```

Acceptance:

- Map with pins for each located issue
- Click pin to see issue summary
- Click to open full issue
- Cluster pins when zoomed out

**US-5.3: Filter issues**

```
As Maria
I want to filter my issues by topic, status, visibility
So that I can find specific items
```

Acceptance:

- Filter by topic (multi-select)
- Filter by status (open/archived)
- Filter by visibility (public/private)
- Filters combinable

**US-5.4: Search issues**

```
As Maria
I want to search my issues by keyword
So that I can find specific items quickly
```

Acceptance:

- Search box
- Searches title and description
- Results update as typing
- Highlights matching text

**US-5.5: View ideas alongside issues**

```
As Maria
I want to see my ideas in the same dashboard
So that I have one place for all my civic documentation
```

Acceptance:

- Tab or toggle between issues and ideas
- Same filtering/search for ideas
- Ideas linked to issues show relationship

**US-5.6: See basic statistics**

```
As Maria
I want to see summary counts of my documentation
So that I can understand my overall activity
```

Acceptance:

- Total issues count
- Total ideas count
- Breakdown by topic (most common)
- Optional: breakdown by month/time

---

### Data Management

**US-6.1: Work offline**

```
As Alex
I want to create issues while offline
So that I can document when I don't have signal
```

Acceptance:

- Can create issue without connection
- Saved as draft locally
- Syncs when connection restored
- Clear indicator of sync status

**US-6.2: Verify data is on pod**

```
As Maria
I want to confirm my data is on my Solid pod
So that I trust I own my data
```

Acceptance:

- Can browse pod storage from ditup
- Data visible in pod file structure
- Can access data directly via pod tools

**US-6.3: Export data**

```
As Maria
I want to export all my data
So that I have backup and can use elsewhere
```

Acceptance:

- Export button
- Downloads all issues/ideas
- Standard format (JSON-LD or Turtle)
- Includes all metadata

---

## Edge Cases & Failure States

**EC-1: Pod provider unreachable**

```
When Maria's pod provider is down
The app should show clear error message
And allow viewing of locally cached content
And queue changes for sync when available
```

**EC-2: Photo upload fails**

```
When Alex's photo upload fails mid-upload
The app should show error message
And retain issue text already entered
And allow retry of photo upload
```

**EC-3: Invalid location entry**

```
When user enters invalid address
The app should show "location not found"
And suggest using map picker
And allow save without location
```

**EC-4: Session expires**

```
When session expires during use
The app should prompt for re-login
And not lose unsaved work
And return to previous context after login
```

**EC-5: Quota exceeded on pod**

```
When user's pod storage is full
The app should show clear message
And suggest what to do (upgrade pod, delete content)
And not corrupt existing data
```

**EC-6: Conflicting edits**

```
When user edits on two devices simultaneously
The app should detect conflict
And show both versions
And let user choose which to keep
```

---

## Phase 2 User Stories (Preview)

These are not in MVP but documented for planning:

**US-P2.1: Discover issues near me**

```
As Jan
I want to see issues documented by others in my area
So that I know what problems people notice nearby
```

**US-P2.2: Find people with similar interests**

```
As Jan
I want to find others who care about cycling in my city
So that I'm not organizing alone
```

**US-P2.3: Make my profile discoverable**

```
As Maria
I want my public profile to appear in searches
So that potential collaborators can find me
```

---

## Phase 3 User Stories (Preview)

**US-P3.1: Propose action for issue**

```
As Tomas
I want to propose a specific action for an issue
So that we can move from documentation to doing
```

**US-P3.2: Commit to action**

```
As Jan
I want to commit to attending a proposed action
So that organizers know I'll be there
```

**US-P3.3: Verify attendance**

```
As Tomas
I want to confirm who attended after the action
So that we have accurate records
```

---

---

---
