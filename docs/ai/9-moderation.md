# Document 9: Moderation Plan

---

## Context

ditup's decentralized architecture creates unique moderation challenges:

- User data lives on their Solid pods (not centrally controlled)
- Public content indexed for discovery
- No central content database to moderate
- Actions happen in real world (safety implications)

---

## Moderation Scope

### What ditup CAN moderate:

| Content                                 | Location      | Control      |
| --------------------------------------- | ------------- | ------------ |
| Index entries                           | Central index | Full control |
| Profile visibility in discovery         | Central index | Full control |
| Platform features access                | Platform      | Full control |
| Notification/communication via platform | Platform      | Full control |

### What ditup CANNOT moderate:

| Content                              | Location       | Control |
| ------------------------------------ | -------------- | ------- |
| Data on user's pod                   | User's pod     | None    |
| Content user shares outside platform | External       | None    |
| Real-world actions                   | Physical world | None    |

**Key insight:** Moderation is about index visibility and platform access, not content deletion (we can't delete from pods).

---

## Moderation Principles

1. **Transparency** - Clear rules, clear process, clear outcomes
2. **Proportionality** - Punishment fits the violation
3. **Due process** - Opportunity to respond before serious action
4. **Privacy** - Don't expose personal information in moderation
5. **Documentation** - Record decisions for consistency
6. **Appeal** - Path to contest decisions

---

## Content Categories

### Allowed Content

- Local issues (infrastructure, environment, services, etc.)
- Ideas for improvement
- Action proposals for legal activities
- Civil disagreement and discussion
- Criticism of institutions, policies, or public figures

### Prohibited Content

| Category        | Examples                                       | Severity                     |
| --------------- | ---------------------------------------------- | ---------------------------- |
| Illegal content | CSAM, credible threats, incitement to violence | Critical - Immediate removal |
| Harassment      | Targeted abuse, doxxing, stalking              | High                         |
| Discrimination  | Hate speech, slurs, exclusionary organizing    | High                         |
| Spam            | Commercial promotion, bot activity             | Medium                       |
| Misinformation  | Deliberately false claims about individuals    | Medium                       |
| Off-topic       | Content unrelated to local issues/organizing   | Low                          |

### Gray Areas

- Political organizing (where to draw line?)
- Controversial but legal viewpoints
- Criticism that borders on harassment
- "Radical" solutions to issues
- Anonymous issue reporting

**Approach to gray areas:** Default to allowing unless clearly violates principles. Document decisions for precedent.

---

## Moderation Actions

### Escalation Ladder

| Level | Action                        | Trigger                     | Reversible       |
| ----- | ----------------------------- | --------------------------- | ---------------- |
| 0     | Warning                       | First minor violation       | N/A              |
| 1     | Content removal from index    | Prohibited content          | Yes (appeal)     |
| 2     | Temporary feature restriction | Repeated violations         | Yes (time-based) |
| 3     | Profile hidden from discovery | Pattern of abuse            | Yes (appeal)     |
| 4     | Platform ban                  | Serious/repeated violations | Appeal possible  |
| 5     | Report to authorities         | Illegal activity            | No               |

### Action Details

**Level 0: Warning**

- Private message explaining violation
- Link to community guidelines
- No immediate consequence
- Logged for future reference

**Level 1: Content removal from index**

- Content removed from discovery
- User notified with reason
- Content remains on user's pod
- Can appeal within 14 days

**Level 2: Temporary restriction**

- Specific features disabled (posting, discovery, etc.)
- Duration: 24 hours to 30 days
- Clear end date communicated
- Automatic restoration

**Level 3: Profile hidden**

- Profile not discoverable
- Can still use personal documentation
- Review after 30-90 days
- Can appeal

**Level 4: Platform ban**

- Account suspended
- All content removed from index
- Cannot create new account
- Can appeal after 6 months

**Level 5: Report to authorities**

- For credible threats or illegal activity
- Cooperate with law enforcement as required
- User may not be notified (depending on situation)
- Consult legal counsel

---

## Reporting System

### How Users Report

**Report button on:**

- Issues
- Ideas
- Actions
- Profiles

**Report form:**

- Content being reported (auto-filled)
- Reason (category selection)
- Additional context (optional text)
- Screenshots (optional)

**Reporter protections:**

- Reporter identity confidential
- No retaliation permitted
- False reporting is itself a violation

### Report Processing

**Triage:**

1. Automated filter for obvious spam patterns
2. Human review queue for all reports
3. Priority based on severity category
4. Target response time: 24-48 hours

**Review process:**

1. Read report and context
2. Review reported content
3. Check user history
4. Apply guidelines
5. Take action or dismiss
6. Notify reporter of outcome (without details)
7. Notify reported user (with reason)
8. Document decision

---

## Moderation Team

### Phase 1-2 (Early Stage)

**Moderation by:** Founder/core team

**Capacity:**

- Review all reports manually
- No automation needed at scale
- Document all decisions for future reference

**Risk:** Founder burnout, inconsistency

### Phase 3+ (Growth)

**Moderation structure:**

- 2-3 volunteer/part-time moderators
- Clear guidelines and training
- Regular sync on edge cases
- Founder oversight for escalations

**Moderator requirements:**

- Active community member
- Training on guidelines and process
- Commitment to fairness
- Ability to handle difficult content

**Moderator support:**

- Clear escalation path
- Mental health resources (dealing with harmful content)
- Regular breaks from moderation duty

### Long-Term (Decentralized)

**Potential models:**

- Community-elected moderation council
- Geographic/topic-based moderators
- Reputation-based moderation privileges
- Multiple indexes with different moderation approaches

---

## Special Cases

### Real-World Safety Concerns

**If action proposed could endanger participants:**

- Contact organizer directly
- Request safety modifications
- If refused, consider removing from index
- Not responsible for real-world outcomes, but exercise reasonable care

**Examples:**

- Action in dangerous location without safety plan
- Action targeting vulnerable individuals
- Action likely to provoke violent response

### Disputes Between Users

**Platform stance:** Not a court. Cannot adjudicate interpersonal disputes.

**Actions available:**

- Encourage direct resolution
- Suggest mediation
- Mutual blocking
- If harassment, standard moderation process

### Organized Harassment Campaigns

**Signs:**

- Multiple reports on same target
- Coordinated language/timing
- Cross-platform coordination

**Response:**

- Document pattern
- Act on individual violations
- Consider proactive protection for target
- Public statement if widespread

### Government or Legal Requests

**For content removal:**

- Require proper legal process
- Consult legal counsel
- Transparency report on requests received
- Comply only when legally required

**For user information:**

- Require proper legal process
- Notify user unless prohibited by law
- Provide only what's legally required
- ditup doesn't hold much data (Solid architecture)

---

## Automation

### What to Automate

| Function                | Automation                   |
| ----------------------- | ---------------------------- |
| Spam patterns           | Keyword/pattern filtering    |
| Duplicate reports       | Aggregate into single review |
| Report queue management | Priority sorting             |
| User notification       | Templated messages           |

### What NOT to Automate

| Function         | Why Human                |
| ---------------- | ------------------------ |
| Content judgment | Context matters          |
| Appeal decisions | Fairness requires review |
| Ban decisions    | Serious consequences     |
| Edge cases       | Need interpretation      |

---

## Transparency

### Public Information

- Community guidelines (always public)
- Moderation process overview
- Aggregate statistics (reports received, actions taken)
- Policy updates with rationale

### Private Information

- Individual moderation decisions (except to involved parties)
- Reporter identities
- Specific investigation details

### Transparency Report (Quarterly/Annual)

- Number of reports received
- Breakdown by category
- Actions taken by type
- Appeals and outcomes
- Notable policy changes
- Government/legal requests (if any)

---

## Guidelines for Moderators

### General Approach

- Assume good faith initially
- Apply guidelines consistently
- Document reasoning
- When in doubt, escalate
- Protect your own mental health

### Decision-Making Framework

1. Does this clearly violate guidelines? → Act accordingly
2. Is this a gray area? → Discuss with team, document decision
3. Is this a new situation? → Escalate, set precedent
4. Am I uncertain? → Get second opinion
5. Am I emotionally reactive? → Step back, get someone else

### What Moderators Should NOT Do

- Make personal judgments beyond guidelines
- Engage in arguments with users
- Share moderation information publicly
- Moderate content they're personally involved in
- Act on content outside their assigned area

---

## Review and Evolution

**Guidelines review:** Quarterly or after significant incidents

**Process:**

1. Collect edge cases and questions from period
2. Review consistency of decisions
3. Identify gaps in guidelines
4. Propose updates
5. Community input on significant changes
6. Implement and communicate

---

---

---
