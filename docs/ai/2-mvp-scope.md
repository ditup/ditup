# Document 2: MVP Scope Definition (Phase 1)

---

## Objective

Deliver a functional personal documentation tool that provides individual value without requiring network effects. Build foundation for future social features.

---

## In Scope

### Authentication

| Feature             | Description                  | Acceptance Criteria                        |
| ------------------- | ---------------------------- | ------------------------------------------ |
| Solid login         | Authenticate via Solid pod   | User can login with any Solid pod provider |
| Session persistence | Stay logged in across visits | Session persists until explicit logout     |
| Logout              | End session                  | User can logout, session cleared           |

### Profile (Basic)

| Feature            | Description                 | Acceptance Criteria                                 |
| ------------------ | --------------------------- | --------------------------------------------------- |
| Create profile     | Basic profile info          | User can set name, bio                              |
| Location           | City/region level           | User can set location with map picker or text entry |
| Interests          | Select from Wikidata topics | User can add/remove interest tags                   |
| Profile visibility | Public/hidden toggle        | User can hide profile from future discovery         |
| Edit profile       | Update profile info         | All fields editable                                 |

### Issue Documentation

| Feature        | Description                    | Acceptance Criteria                             |
| -------------- | ------------------------------ | ----------------------------------------------- |
| Create issue   | Document a local problem       | Title, description, location, visibility        |
| Add photos     | Attach images to issue         | Upload 1-5 photos per issue                     |
| Add location   | Pin issue to map               | Map picker or address entry, stores coordinates |
| Add topics     | Tag with Wikidata topics       | Search and select relevant topics               |
| Set visibility | Private or public              | Toggle per issue, private by default            |
| Edit issue     | Update issue details           | All fields editable                             |
| Delete issue   | Remove issue                   | Soft delete, recoverable                        |
| Archive issue  | Mark issue as no longer active | Archived status, filterable                     |

### Idea Documentation

| Feature              | Description                  | Acceptance Criteria             |
| -------------------- | ---------------------------- | ------------------------------- |
| Create idea          | Document a solution/proposal | Title, description, visibility  |
| Link to issue        | Associate idea with issue    | Optional link to existing issue |
| Add resources needed | Describe what's required     | Free text field                 |
| Add topics           | Tag with Wikidata topics     | Search and select               |
| Set visibility       | Private or public            | Toggle, private by default      |
| Edit idea            | Update idea details          | All fields editable             |
| Delete idea          | Remove idea                  | Soft delete                     |

### Personal Dashboard

| Feature    | Description                         | Acceptance Criteria                     |
| ---------- | ----------------------------------- | --------------------------------------- |
| List view  | See all own issues/ideas            | Sortable by date, status                |
| Filter     | Filter by topic, status, visibility | Multiple filter options                 |
| Search     | Search own content                  | Full-text search of titles/descriptions |
| Map view   | See own issues on map               | Interactive map with pins               |
| Statistics | Basic counts                        | Total issues, ideas, by topic           |

### Data Management

| Feature        | Description            | Acceptance Criteria                    |
| -------------- | ---------------------- | -------------------------------------- |
| Pod storage    | All data on user's pod | Data verifiably stored on pod          |
| Offline drafts | Create content offline | Drafts saved locally, sync when online |
| Export         | Download own data      | Export to standard format              |

### Basic UX

| Feature           | Description              | Acceptance Criteria                  |
| ----------------- | ------------------------ | ------------------------------------ |
| Mobile responsive | Works on mobile devices  | Usable on phone screen               |
| Photo upload      | Easy image attachment    | Camera or gallery upload on mobile   |
| Quick entry       | Fast issue/idea creation | Minimal required fields, <30 seconds |

---

## Explicitly Out of Scope (Phase 1)

### Discovery Features (Phase 2)

- ❌ Central index
- ❌ Geographic search for others' content
- ❌ Topic-based discovery
- ❌ Profile browsing
- ❌ Finding people by interests

### Collaboration Features (Phase 3)

- ❌ Action proposals
- ❌ Commitment system
- ❌ Notifications about others' activity
- ❌ Messaging between users
- ❌ Comments on issues/ideas

### Reputation Features (Phase 4)

- ❌ Attendance tracking
- ❌ Verification system
- ❌ Reputation scores
- ❌ Activity history display

### Advanced Features (Phase 5+)

- ❌ Federation
- ❌ Multiple index servers
- ❌ Working groups
- ❌ Recurring actions
- ❌ Calendar integration

---

## Technical Requirements

### Solid Compatibility

- Works with Community Solid Server (CSS)
- Works with Inrupt ESS
- Works with other major pod providers
- Uses standard Solid authentication

### Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari
- Mobile Chrome

### Performance

- Initial load: <3 seconds on 3G
- Issue creation: <2 seconds to save
- Photo upload: Progress indicator, <10 seconds for typical photo
- Map interaction: Smooth pan/zoom

### Accessibility

- Keyboard navigation
- Screen reader compatible
- Color contrast compliance
- Alt text for images

---

## Non-Functional Requirements

### Privacy

- Private content never sent to server
- No analytics that track content
- Clear privacy status indicators in UI
- User understands what's private vs public

### Security

- HTTPS only
- Solid authentication standards
- No password storage (delegated to pod provider)
- XSS prevention

### Data Integrity

- No data loss on network interruption
- Drafts auto-saved
- Confirmation before destructive actions
- Undo for accidental deletes

---

## Acceptance Criteria Summary

### MVP is complete when:

1. User can create Solid account or login with existing pod
2. User can create, edit, delete issues with photos, location, topics
3. User can create, edit, delete ideas linked to issues
4. User can toggle visibility per item (private/public)
5. User can view all their content in list and map views
6. User can filter and search their content
7. All data stored on user's pod
8. Works on desktop and mobile browsers
9. Basic profile with location and interests

### MVP is NOT complete until:

- All "In Scope" items pass acceptance criteria
- No critical bugs
- Performance requirements met
- Accessibility requirements met
- Tested with at least 2 Solid pod providers

---

## Estimated Effort

| Component                  | Estimate         |
| -------------------------- | ---------------- |
| Solid auth integration     | 1 week           |
| Profile CRUD               | 0.5 week         |
| Issue CRUD + photos        | 2 weeks          |
| Idea CRUD                  | 1 week           |
| Map integration            | 1 week           |
| Dashboard views            | 1 week           |
| Topic/Wikidata integration | 1 week           |
| Mobile responsive          | 1 week           |
| Testing + polish           | 2 weeks          |
| **Total**                  | **~10-11 weeks** |

These are rough estimates assuming single developer. Adjust based on actual velocity.

---

## Risks

| Risk                               | Impact                           | Mitigation                            |
| ---------------------------------- | -------------------------------- | ------------------------------------- |
| Solid pod provider inconsistencies | Features break on some providers | Test with multiple providers early    |
| Photo storage limits on pods       | Users can't upload photos        | Compress images, document limits      |
| Wikidata API reliability           | Topic search fails               | Cache common topics, fallback options |
| Map provider costs                 | Exceeds budget                   | Use free tier, monitor usage          |
| Scope creep                        | Delays launch                    | Strict "out of scope" enforcement     |

---

---

---
