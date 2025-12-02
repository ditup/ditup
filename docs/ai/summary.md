# ditup

**do it together: turn problems into action**

---

## The problem being solved

People notice problems in their environment. They have ideas for solutions. Most of this goes nowhere because:

- No place to capture it systematically
- No way to find others who care about the same thing
- No mechanism to move from observation to action
- No accountability for follow-through

Existing platforms fail because they optimize for engagement (discussion, likes, comments) rather than outcomes (real-world action).

---

## What ditup is

A tool for documenting issues and ideas, with optional discovery and collaboration features.

**Minimum:** Personal archive of civic observations
**Maximum:** Coordination platform for local action with verified participation

User decides how much to engage. Private use is fully functional.

---

## The user journey

### Stage 1: Personal use (no network required)

User notices things. Broken streetlight. Dangerous intersection. Idea for community garden. Wish for better bike parking.

Instead of forgetting or posting on social media for likes, user documents in ditup:

- Description
- Photo
- Location
- Topic tags
- Private or public toggle

This creates a personal, searchable map of concerns and ideas.

**Value delivered:** Organized thinking. Personal archive. Pattern recognition over time.

### Stage 2: Public presence (optional)

User creates profile:

- Location (city/region/radius)
- Interests (topics from Wikidata)
- Availability for collaboration types

User selects which documented items to make public.

**Value delivered:** Discoverable presence. Portfolio of documented concerns. Ready for connection when network grows.

### Stage 3: Discovery (requires network density)

User searches:

- "Who near me cares about cycling infrastructure?"
- "What issues have been documented in my neighborhood?"
- "Who else noticed this problem?"

Matches based on geography + topics + documented issues.

**Value delivered:** Finding like-minded people. Realizing you're not alone in noticing problems.

### Stage 4: Collaboration (requires active participants)

Someone proposes action for a documented issue:

- What: Park cleanup
- When: Saturday 2pm
- Where: Miller Park main entrance
- Needs: Trash bags, 5 people minimum

Others commit. Action happens. Attendance verified through mutual confirmation.

**Value delivered:** Problems actually addressed. Real relationships formed. Agency restored.

### Stage 5: Reputation (requires history)

Over time:

- "Committed 15 times, showed up 14"
- "Documented 30 issues, 8 led to actions"
- "Proposed 5 solutions that got implemented"

Reputation is portable via Solid. Travels to new city, new community.

**Value delivered:** Trust signal. Proof of reliability. Accumulated civic credibility.

---

## Privacy architecture

| Content type      | Default     | User control                      |
| ----------------- | ----------- | --------------------------------- |
| Personal notes    | Private     | Can publish anytime               |
| Ideas/proposals   | Private     | Can share selectively or publicly |
| Profile           | Not created | User decides what to include      |
| Commitments       | Private     | Can make visible                  |
| Attendance record | Private     | Can make visible for reputation   |

**Core principle:** User controls all visibility decisions. Platform never exposes private content.

---

## Technical foundation

### Solid protocol

- Data stored on user's pod (personal data server)
- User owns and controls all data
- Portable between platforms
- Survives platform shutdown
- No vendor lock-in

### Federated discovery

- Central or federated index for search
- Users post to index inbox
- Index enables geographic/topic discovery
- Multiple indexes possible (regional, topic-based)

### No advertising model

- Platform doesn't profit from attention
- No incentive to maximize engagement
- Success = users taking action offline
- Aligned with user goals

---

## Competitive positioning

| Platform        | What it optimizes for        | ditup difference                       |
| --------------- | ---------------------------- | -------------------------------------- |
| Nextdoor        | Engagement, local discussion | Action completion, not discussion      |
| Facebook Groups | Time on platform, ad revenue | User data ownership, no ads            |
| Meetup          | Event attendance             | Issue-driven, not event-driven         |
| Twitter         | Viral content, engagement    | Private-first, action-oriented         |
| Notion          | Personal productivity        | Public layer, discovery, collaboration |
| FixMyStreet     | Government reporting         | Peer collaboration, not institutional  |

---

## What must be true for this to work

### For individual value (low risk)

- Documentation features must be genuinely useful
- Must be at least as good as notes apps for this use case
- Privacy controls must work reliably

### For network value (higher risk)

- Must achieve geographic density in target areas
- Users must actually propose and complete actions
- Attendance verification must feel natural, not burdensome
- Reputation must become valued signal

### For platform sustainability (long-term risk)

- Must find sustainable funding without advertising
- Solid ecosystem must remain viable
- Must resist pressure to add engagement-maximizing features

---

## Honest limitations

### At launch

- Discovery features are empty (no users to discover)
- Collaboration features are theoretical (no one to collaborate with)
- Reputation has no value (no one recognizes it)

### Ongoing

- Requires manual community seeding, not viral growth
- Appeals to civic-minded minority, not mass market
- Success depends on users completing actions, which is hard

### Structural

- Solid requirement limits potential user base
- Decentralization adds complexity without obvious user benefit
- Competing against platforms with massive network effects

---

## Messaging framework

### What to say at launch

- "Document the problems you notice"
- "Keep track of your ideas"
- "Build your civic portfolio"
- "Be discoverable when others join"

### What not to say at launch

- "Find collaborators near you" (can't deliver yet)
- "Join a community of changemakers" (community doesn't exist yet)
- "Turn your ideas into action" (requires network that isn't there)

### What to say as network grows

- "Others in your area have documented similar issues"
- "3 people near you care about cycling infrastructure"
- "Join proposed action: Park cleanup Saturday"

---

## User acquisition reality

### What won't work

- Viral growth (no viral mechanism)
- Individual organic adoption (weak standalone value proposition)
- Mass marketing (appeals to niche audience)

### What might work

- Manual seeding of specific geographic communities
- Partnership with existing organized groups
- Targeting existing Solid/decentralization advocates
- One neighborhood/city achieving density, then expanding

---

## Metrics that matter

### Vanity metrics (don't optimize for)

- Total signups
- Daily active users
- Time on platform
- Content volume

### Real metrics (optimize for)

- Actions proposed per documented issue
- Commitment rate (commits / views)
- Attendance rate (showed up / committed)
- Issues with documented resolution
- Users who return after 6 months

---

## Summary

**ditup** solves the gap between noticing problems and doing something about them.

**For individuals:** Structured documentation of issues and ideas, private or public, under user control.

**For communities:** Discovery of like-minded people, coordination of real-world action, accountability through attendance tracking.

**Foundation:** Solid protocol ensures data ownership, privacy, and platform sustainability without advertising incentives.

**Constraint:** Requires network density to deliver on collaboration promise. Launch strategy must account for this through community seeding rather than individual viral adoption.

**Differentiator:** Optimizes for action completion, not engagement. The goal is getting users offline and fixing things, not keeping them scrolling.
