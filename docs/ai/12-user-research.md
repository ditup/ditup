# Document 12: User Research Plan

---

## Purpose

Validate assumptions about user needs, behaviors, and motivations before building features that may not be wanted.

---

## Research Principles

1. **Assumptions are hypotheses** - Test, don't assume
2. **Behavior over preference** - What people do matters more than what they say
3. **Small samples, deep insight** - 5 interviews > 500 survey responses for early stage
4. **Continuous, not one-time** - Research throughout development
5. **Act on findings** - Research without action is waste

---

## Key Assumptions to Validate

### Assumption 1: People want to document local issues

**Hypothesis:** Civic-minded individuals would find value in systematically documenting local issues/ideas they notice.

**Risk if wrong:** Core product premise fails.

**Evidence needed:**

- People currently document in some form (notes, social media, etc.)
- Pain with current methods
- Interest in structured documentation

**Research method:** Interviews with target users

---

### Assumption 2: Documentation provides individual value

**Hypothesis:** Private documentation with location/topic structure provides enough utility to use without network effects.

**Risk if wrong:** No early adoption, chicken-egg problem.

**Evidence needed:**

- Users return to platform for personal use
- Users create multiple issues over time
- Users reference their own documentation

**Research method:** Usage analytics, interviews with early users

---

### Assumption 3: Users will make content public

**Hypothesis:** After documenting privately, users will choose to publish some content for discovery.

**Risk if wrong:** Platform remains collection of private silos.

**Evidence needed:**

- Private → public conversion rate
- Motivation for publishing
- Barriers to publishing

**Research method:** Analytics, surveys, interviews

---

### Assumption 4: Discovery creates value

**Hypothesis:** Finding others who documented similar issues or share interests creates meaningful value.

**Risk if wrong:** Discovery features unused.

**Evidence needed:**

- Users search for others' content
- Discovery leads to connection
- Users report value from discovery

**Research method:** Usage analytics, interviews, surveys

---

### Assumption 5: Actions will complete

**Hypothesis:** Proposed actions will attract commitments and actually happen.

**Risk if wrong:** Platform becomes another discussion venue.

**Evidence needed:**

- Commitment rates per action
- Attendance rates
- User reports of completed actions

**Research method:** Analytics, post-action surveys, interviews

---

### Assumption 6: Attendance tracking creates accountability

**Hypothesis:** Knowing attendance will be tracked increases show-up rates.

**Risk if wrong:** Core differentiator neutralized.

**Evidence needed:**

- Comparison of attendance rates (with/without tracking)
- User perception of accountability
- Behavior change from tracking

**Research method:** A/B testing (if scale allows), surveys, interviews

---

### Assumption 7: Reputation becomes valued

**Hypothesis:** Users will value their reputation scores and consider others' reputation.

**Risk if wrong:** Reputation system ignored.

**Evidence needed:**

- Users enable public reputation
- Users check others' reputation
- Reputation influences decisions

**Research method:** Analytics, surveys

---

### Assumption 8: Solid requirement is acceptable

**Hypothesis:** Target users will accept Solid pod requirement despite friction.

**Risk if wrong:** Adoption severely limited.

**Evidence needed:**

- Signup completion rates
- Dropout points in Solid flow
- User understanding of Solid value
- Comparison with non-Solid alternatives (if tested)

**Research method:** Analytics, exit surveys, interviews with dropouts

---

## Research Methods

### Method 1: User Interviews

**When:** Pre-development, ongoing

**Sample size:** 5-10 per round

**Recruitment:**

- Target persona alignment
- Mix of existing tool users and potential users
- Warm introductions preferred

**Interview structure:**

- 30-45 minutes
- Semi-structured (core questions + follow-ups)
- Record with permission
- Focus on current behavior before showing product

**Question types:**

- Current behavior: "How do you currently track things you notice locally?"
- Pain points: "What's frustrating about that?"
- Motivation: "Why do you document these things?"
- Social: "Do you ever share these observations? How?"
- Needs: "What would make this easier?"

**Analysis:**

- Transcribe or detailed notes
- Identify patterns across interviews
- Highlight surprising findings
- Summarize implications

---

### Method 2: Usability Testing

**When:** Before major releases, for specific flows

**Sample size:** 5 per round (typically identifies 80% of issues)

**Recruitment:**

- Mix of tech comfort levels
- Include target user characteristics

**Test structure:**

- 20-30 minutes
- Specific tasks to complete
- Think-aloud protocol
- Observer notes, screen recording

**Tasks to test:**

- Create account (Solid flow)
- Document first issue
- Add photo and location
- Find content in dashboard
- Change visibility settings
- (Later) Find nearby issues
- (Later) Commit to action

**Metrics:**

- Task completion rate
- Time on task
- Error count
- Confusion points
- Satisfaction rating

---

### Method 3: Surveys

**When:** After reaching minimum user base (100+)

**Types:**

**Onboarding survey (after first session):**

- Why did you sign up?
- First impression?
- What would you use this for?
- Anything confusing?

**Ongoing NPS/satisfaction (monthly):**

- How likely to recommend (0-10)?
- What would improve your experience?
- What do you use most?

**Feature-specific surveys:**

- After using new feature
- Specific questions about value and usability

**Exit survey (if user leaves):**

- Why are you leaving?
- What would bring you back?
- What did you try to do but couldn't?

---

### Method 4: Analytics

**What to track:**

**Acquisition:**

- Signups started
- Signups completed
- Solid pod creation vs existing pod
- Dropout points in signup

**Activation:**

- First issue created
- First idea created
- Profile completed
- Location set

**Retention:**

- Daily/weekly/monthly active users
- Return rate (users who come back)
- Session frequency
- Content created over time

**Engagement:**

- Issues created per user
- Ideas created per user
- Visibility changes (private → public)
- Time spent on platform

**Outcomes (Phase 3+):**

- Actions proposed
- Commitments made
- Attendance verified
- Issues marked resolved

**Discovery (Phase 2+):**

- Search usage
- Discovery → profile view
- Discovery → connection

---

### Method 5: Observation

**When:** Partner pilots, early users

**Method:**

- Watch users in their natural context
- See how ditup fits (or doesn't) into their routine
- Note workarounds and frustrations
- Understand real use vs stated use

**Applications:**

- Observe partner organization meetings
- Watch someone document issue in the field
- See how organizers coordinate actions

---

## Research Phases

### Pre-Development Research

**Goal:** Validate core assumptions before building

**Activities:**

- 8-10 interviews with target users
- Competitive product analysis (how do people solve this now?)
- Review of failed similar products (why did they fail?)

**Key questions:**

- Do people actually document local issues?
- What tools do they use now?
- What's missing from current tools?
- Would they use a dedicated tool?

**Output:**

- Validated/invalidated assumptions
- User personas refined
- Feature prioritization informed

---

### MVP Testing Research

**Goal:** Validate individual value proposition

**Activities:**

- 5 usability tests of core flows
- Onboarding survey
- Usage analytics setup
- 5 interviews with early users after 2 weeks

**Key questions:**

- Can users complete core tasks?
- Do they return for personal use?
- What's working/not working?

**Output:**

- Usability fixes
- Refinement priorities
- Early retention indicators

---

### Discovery Phase Research

**Goal:** Validate network value proposition

**Activities:**

- Usage analytics on discovery features
- Surveys on discovery value
- Interviews with users who connected through platform

**Key questions:**

- Are users searching for others?
- Does discovery lead to connection?
- Is finding others valuable?

**Output:**

- Discovery feature refinement
- Density requirements understood
- Network effects evidence

---

### Action Phase Research

**Goal:** Validate action completion and accountability

**Activities:**

- Action completion analytics
- Post-action surveys
- Interviews with action organizers and participants
- Comparison of committed vs attended

**Key questions:**

- Do actions happen?
- Does tracking improve attendance?
- Is the process usable?

**Output:**

- Action flow refinement
- Attendance tracking validation
- Accountability evidence

---

## Research Schedule

| Phase           | Timeline       | Research Focus               |
| --------------- | -------------- | ---------------------------- |
| Pre-development | Before Phase 1 | Core assumptions             |
| Phase 1         | During build   | Usability of documentation   |
| Phase 1 launch  | First month    | Onboarding, early retention  |
| Phase 1 ongoing | Monthly        | Usage patterns, satisfaction |
| Phase 2         | During build   | Discovery usability          |
| Phase 2 launch  | First month    | Discovery value              |
| Phase 3         | During build   | Action flow usability        |
| Phase 3 launch  | First month    | Action completion            |

---

## Interview Question Bank

### Current Behavior

- How do you currently keep track of issues you notice in your community?
- When you have an idea for local improvement, what do you do with it?
- Have you ever tried to organize something in your community? How did it go?
- What tools do you use for local organizing?
- What's frustrating about those tools?

### Motivation

- What motivates you to care about local issues?
- When you document something, who is it for?
- What would make you more likely to take action on something you noticed?
- Do you feel connected to your local community? Why/why not?

### Social Dynamics

- Do you know others who care about similar local issues?
- How did you find them?
- What would help you find more like-minded people?
- When you organize something, how do you handle no-shows?

### Product Feedback

- What did you expect when you signed up?
- What's working well?
- What's confusing or frustrating?
- What's missing?
- Would you recommend this to a friend? Why/why not?

### Solid-Specific

- Had you heard of Solid before?
- What do you understand about where your data is stored?
- Does data ownership matter to you? Why/why not?
- Was the Solid setup process clear?

---

## Acting on Research

### After Each Research Round

1. **Synthesize findings** - What did we learn?
2. **Identify implications** - What does this mean for product?
3. **Prioritize changes** - What to change now vs later?
4. **Share with stakeholders** - Community, partners
5. **Update assumptions** - Mark validated/invalidated
6. **Plan next research** - What to learn next?

### Documentation

**Research repository:**

- Interview notes and transcripts
- Survey results
- Usability test recordings/notes
- Analytics dashboards
- Synthesis documents
- Decision log (what changed based on research)

---

---

---
