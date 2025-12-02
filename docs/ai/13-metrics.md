# Document 13: Metrics Framework

---

## Principles

1. **Measure what matters** - Outcomes, not vanity
2. **Leading and lagging** - Early indicators and final outcomes
3. **Actionable** - Metrics that inform decisions
4. **Honest** - Don't game for good-looking numbers
5. **Simple** - Few metrics, deeply understood

---

## Metrics by Phase

### Phase 1 Metrics: Documentation Value

**Primary question:** Are users finding personal value in documentation?

| Metric                 | Definition                                     | Target | Why It Matters                      |
| ---------------------- | ---------------------------------------------- | ------ | ----------------------------------- |
| Activation rate        | % of signups who create 1+ issue               | >50%   | Shows basic value proposition works |
| Return rate (D7)       | % of activated users who return within 7 days  | >30%   | Retention indicator                 |
| Issues per active user | Average issues created per monthly active user | >3     | Engagement depth                    |
| Session frequency      | Average sessions per month per active user     | >4     | Habit formation                     |

**Lagging indicators:**

- 30-day retention rate
- 3-month retention rate
- User-reported satisfaction (NPS)

**Leading indicators:**

- Time to first issue
- Onboarding completion rate
- Photo/location attachment rate

---

### Phase 2 Metrics: Discovery Value

**Primary question:** Does discovery create connections?

| Metric                  | Definition                           | Target | Why It Matters                |
| ----------------------- | ------------------------------------ | ------ | ----------------------------- |
| Discovery usage         | % of active users who search/browse  | >40%   | Feature adoption              |
| Discovery success       | Searches that result in profile view | >20%   | Search is useful              |
| Profile visibility rate | % of users with public profile       | >30%   | Users willing to be found     |
| Connection rate         | Discovery → any contact/follow       | >5%    | Discovery leads to connection |

**Density metrics:**
| Metric | Definition | Target |
|--------|------------|--------|
| Users per city | Active users in each seeded city | >20 |
| Issues per area | Public issues within target areas | >50 |
| Topic coverage | Active users per major topic | >10 |

---

### Phase 3 Metrics: Action Completion

**Primary question:** Do actions happen?

| Metric                   | Definition                        | Target  | Why It Matters              |
| ------------------------ | --------------------------------- | ------- | --------------------------- |
| Action proposal rate     | Actions proposed per month        | Growing | Users moving to action      |
| Commitment rate          | Commitments per action proposed   | >3 avg  | Actions attracting interest |
| Action confirmation rate | Actions meeting minimum threshold | >50%    | Actions viable              |
| Attendance rate          | Attended / committed              | >70%    | Accountability works        |
| Action completion rate   | Actions marked completed          | >60%    | Follow-through              |

**Outcome metrics:**
| Metric | Definition | Target |
|--------|------------|--------|
| Issues resolved | Issues marked resolved with outcome | Growing |
| Before/after documentation | Actions with outcome photos | >30% |
| Repeat participation | Users in 2+ completed actions | >30% |

---

### Phase 4 Metrics: Reputation Value

**Primary question:** Is reputation meaningful?

| Metric                        | Definition                                  | Target               | Why It Matters          |
| ----------------------------- | ------------------------------------------- | -------------------- | ----------------------- |
| Reputation visibility         | % users with public reputation              | >40%                 | Users value reputation  |
| Reputation view rate          | Profile views that include reputation check | >50%                 | Others check reputation |
| Reputation-action correlation | Higher reputation → more commitments        | Positive             | Reputation trusted      |
| Attendance rate by reputation | Do high-rep users show up more?             | Positive correlation | Reputation predictive   |

---

### Platform Health Metrics (All Phases)

| Metric                     | Definition                                | Target                  |
| -------------------------- | ----------------------------------------- | ----------------------- |
| Monthly Active Users (MAU) | Unique users with any activity in 30 days | Growing                 |
| Content creation           | Issues + ideas created per month          | Growing                 |
| Geographic spread          | Cities with 5+ active users               | Growing                 |
| Partner organizations      | Active community partners                 | Growing                 |
| Moderation load            | Reports per 1000 users                    | Stable/declining        |
| Pod provider diversity     | % users per pod provider                  | No single provider >50% |

---

## Metrics NOT to Optimize

**Avoid vanity metrics:**

| Metric                 | Why Not Primary                  |
| ---------------------- | -------------------------------- |
| Total signups          | Meaningless without activation   |
| Total issues created   | Could be few users creating many |
| Page views             | Engagement theater               |
| Time on platform       | Goal is offline action, not time |
| Social media followers | Doesn't indicate product value   |

**Avoid perverse incentives:**

| Metric              | Why Dangerous                     |
| ------------------- | --------------------------------- |
| Daily active users  | Could encourage empty check-ins   |
| Content volume      | Could encourage low-quality spam  |
| Notification clicks | Could encourage over-notification |

---

## Metric Definitions

### User States

```
Signup → Activated → Retained → Engaged → Contributing
```

**Signup:** Created account
**Activated:** Created first issue OR completed profile
**Retained:** Returned within 7 days of activation
**Engaged:** Active in current month (any activity)
**Contributing:** Created content or participated in action in current month

### Cohort Analysis

Track metrics by signup cohort (week or month):

- What % of Jan signups are still active in June?
- How does retention curve differ for users who found via different channels?

### Funnel Analysis

Key funnels to track:

**Onboarding funnel:**

```
Landing page → Signup started → Pod setup → Profile created → First issue
```

**Discovery funnel (Phase 2+):**

```
Search → Results → Profile view → Contact/connection
```

**Action funnel (Phase 3+):**

```
Action viewed → Committed → Reminded → Attended → Verified
```

---

## Dashboards

### Executive Dashboard (Weekly Review)

- Total active users (MAU, WAU)
- New signups this week
- Activation rate
- 7-day retention (current cohort)
- Key content metrics (issues created, actions proposed)
- Top-line funnel conversion

### Product Dashboard (Daily/Weekly)

- Detailed funnel metrics
- Feature usage breakdown
- Error rates and performance
- Cohort retention curves
- User feedback summary

### Health Dashboard (Weekly)

- Moderation queue size
- Report response time
- Pod provider status
- Infrastructure performance
- Cost metrics

### Growth Dashboard (Monthly)

- Geographic spread
- Partner organization metrics
- Channel effectiveness
- Referral tracking
- Competitive positioning

---

## Tracking Implementation

### Analytics Tools

**Recommended approach:**

- Privacy-respecting analytics (Plausible, Fathom, or self-hosted)
- Event tracking for key actions
- No personal data in analytics
- User opt-out available

**Events to track:**

| Event               | Properties                          |
| ------------------- | ----------------------------------- |
| signup_started      | source                              |
| signup_completed    | pod_provider, source                |
| profile_created     | has_location, has_interests         |
| issue_created       | has_photo, has_location, visibility |
| idea_created        | linked_to_issue, visibility         |
| visibility_changed  | from, to                            |
| search_performed    | type (geo/topic/profile)            |
| profile_viewed      | via_discovery                       |
| action_created      | min_participants                    |
| commitment_made     |                                     |
| attendance_verified | confirmed_by_count                  |

### Data Collection Principles

- Aggregate, don't individual track
- No tracking of content (only actions)
- User can see what's tracked
- Data deleted after analysis period (1 year)
- No third-party analytics that leak data

---

## Reporting Cadence

| Report            | Frequency | Audience         | Content                   |
| ----------------- | --------- | ---------------- | ------------------------- |
| Metrics snapshot  | Weekly    | Team             | Key metrics, changes      |
| Detailed analysis | Monthly   | Team, Council    | Trends, insights, actions |
| Public metrics    | Quarterly | Community        | Aggregate platform health |
| Annual review     | Yearly    | All stakeholders | Full year analysis, goals |

---

## Targets and Benchmarks

### Phase 1 Targets (Months 1-6)

| Metric                         | Target |
| ------------------------------ | ------ |
| Total signups                  | 100    |
| Activation rate                | 50%    |
| 7-day retention                | 30%    |
| 30-day retention               | 20%    |
| Issues created                 | 300    |
| Average issues per active user | 3+     |

### Phase 2 Targets (Months 7-12)

| Metric                | Target         |
| --------------------- | -------------- |
| Total signups         | 300            |
| Active users (MAU)    | 150            |
| Public profiles       | 100            |
| Discovery usage       | 40% of actives |
| Users per seeded city | 20+            |

### Phase 3 Targets (Months 13-18)

| Metric             | Target |
| ------------------ | ------ |
| Total signups      | 700    |
| Active users (MAU) | 300    |
| Actions proposed   | 50     |
| Actions completed  | 30     |
| Attendance rate    | 70%    |

### Phase 4 Targets (Months 19-24)

| Metric                | Target    |
| --------------------- | --------- |
| Active users (MAU)    | 500       |
| Public reputation     | 200 users |
| Issues resolved       | 50        |
| Partner organizations | 10        |

---

## Using Metrics for Decisions

### When to Change Course

| Signal                 | Possible Action                                |
| ---------------------- | ---------------------------------------------- |
| Activation <30%        | Simplify onboarding, value proposition unclear |
| Retention <15%         | Individual value not compelling                |
| Discovery unused       | Discovery not surfaced, no density             |
| Actions not completing | Action flow too complex, threshold too high    |
| Attendance <50%        | Accountability not working                     |

### When to Double Down

| Signal                  | Action                     |
| ----------------------- | -------------------------- |
| Retention >40%          | Focus on acquisition       |
| Actions completing well | Add more action features   |
| Discovery converting    | Invest in density          |
| Partner retention high  | Expand partnership efforts |

### When to Investigate

| Signal                                 | Investigation          |
| -------------------------------------- | ---------------------- |
| Sudden metric drop                     | Bug? External event?   |
| Metric divergence (some up, some down) | Segment analysis       |
| Flat metrics                           | Why no growth/decline? |

---

## Metric Pitfalls

**Don't:**

- Compare to VC-backed platform growth (different model)
- Optimize one metric at expense of others
- Change metric definitions to look better
- Ignore qualitative feedback for quantitative
- Report metrics without context
- Set targets without baseline data

**Do:**

- Set realistic targets based on resources
- Celebrate sustainable growth
- Track cohorts, not just aggregates
- Combine quantitative and qualitative
- Update targets as you learn

---

## Summary

| Phase   | Primary Metric                 | Secondary Metrics                |
| ------- | ------------------------------ | -------------------------------- |
| 1       | 7-day retention                | Activation, issues/user          |
| 2       | Connection rate from discovery | Profile visibility, density      |
| 3       | Action completion rate         | Attendance rate, commitment rate |
| 4       | Reputation display rate        | Reputation influence on behavior |
| Ongoing | Monthly active users           | Geographic spread, partner count |

**North star metric:** Completed actions with verified attendance.

This measures the full loop from documentation to real-world impact - the core value proposition.
