# Document 6: Risk Register

---

## Risk Categories

1. **Product risks** - Features don't work as intended
2. **Market risks** - Users don't adopt or retain
3. **Technical risks** - Platform doesn't function reliably
4. **Competitive risks** - Competitors respond or dominate
5. **Sustainability risks** - Platform can't sustain itself
6. **Reputational risks** - Trust damage

---

## Risk Assessment Scale

**Probability:** Low (< 25%) | Medium (25-60%) | High (> 60%)

**Impact:** Low (minor setback) | Medium (significant problem) | High (existential threat)

**Priority:** P1 (address immediately) | P2 (plan mitigation) | P3 (monitor)

---

## Product Risks

### R-P1: Documentation features not compelling enough

**Description:** Personal issue/idea documentation doesn't provide enough value over existing notes apps (Notion, Obsidian, etc.)

**Probability:** Medium

**Impact:** High - No individual value means no users

**Indicators:**

- Low repeat usage
- Users create 1-2 issues then stop
- Feedback: "I just use Notes for this"

**Mitigation:**

- User research on what makes documentation valuable
- Focus on location + topic structure as differentiator
- Seamless mobile quick-entry
- Map visualization as unique value

**Contingency:** Pivot to discovery/collaboration focus if documentation alone insufficient

**Priority:** P1

---

### R-P2: Discovery features empty at launch

**Description:** Geographic and topic discovery useless without user density

**Probability:** High

**Impact:** Medium - Expected at launch, problematic if persists

**Indicators:**

- Users search, find nothing, leave
- Feedback: "There's no one here"
- Low return rate after first discovery attempt

**Mitigation:**

- Phase discovery features after density achieved
- Honest messaging about network stage
- Manual community seeding before launching discovery
- Don't market discovery until density exists

**Contingency:** Focus on individual value until density achieved

**Priority:** P2 (manage expectations)

---

### R-P3: Actions don't complete

**Description:** Users propose actions but they don't happen (insufficient commitments, no-shows, cancellations)

**Probability:** Medium

**Impact:** High - Core value proposition fails

**Indicators:**

- Low commitment rates per action
- High no-show rates
- Actions cancelled for lack of participants
- Users stop proposing actions

**Mitigation:**

- Minimum participant thresholds before confirmation
- Reminder notifications
- Attendance verification creates accountability over time
- Start with low-commitment actions

**Contingency:** Simplify action system, focus on documentation if actions consistently fail

**Priority:** P1

---

### R-P4: Attendance verification gamed or rejected

**Description:** Users collude to fake attendance, or find verification burdensome

**Probability:** Medium

**Impact:** Medium - Undermines reputation system

**Indicators:**

- Suspicious confirmation patterns
- Low verification completion rates
- Feedback: "This is annoying"

**Mitigation:**

- Require 2+ confirmations for verified attendance
- Fraud detection for repeated mutual-only confirmations
- Make verification optional but incentivized
- Keep verification flow simple (< 30 seconds)

**Contingency:** Reduce reputation weight of unverifiable actions

**Priority:** P2

---

### R-P5: Reputation system doesn't create value

**Description:** Reputation scores don't influence behavior or decisions

**Probability:** Medium

**Impact:** Medium - Key differentiator neutralized

**Indicators:**

- Users don't check others' reputation
- No correlation between reputation and trust/collaboration
- Low opt-in to public reputation display

**Mitigation:**

- Surface reputation prominently in action contexts
- Testimonials from users who valued reputation
- Allow filtering by reliability
- Make reputation portable/useful outside platform

**Contingency:** De-emphasize reputation, focus on other differentiators

**Priority:** P2

---

## Market Risks

### R-M1: Users don't see need for civic documentation

**Description:** Target users don't document local issues anywhere, won't start with ditup

**Probability:** Medium

**Impact:** High - No demand for core feature

**Indicators:**

- Low signup conversion from landing page
- Feedback: "I don't really track this stuff"
- Users create account but never document

**Mitigation:**

- Target existing documenters (note-takers, civic-minded)
- Emphasize private utility, not just civic purpose
- Lower barrier to first issue creation
- Prompt-based entry ("What's broken near you?")

**Contingency:** Pivot to discovery-first or action-first approach

**Priority:** P1

---

### R-M2: Solid requirement limits adoption

**Description:** Requiring Solid pod creates friction that prevents mainstream adoption

**Probability:** High

**Impact:** Medium - Limits growth, may be acceptable trade-off

**Indicators:**

- High dropout during pod creation
- Feedback: "This is too complicated"
- Only tech-savvy users complete signup

**Mitigation:**

- Streamlined pod creation flow
- Partner with easy pod providers
- Clear explanation of why Solid matters
- Consider hosted pod option (against Solid philosophy but pragmatic)

**Contingency:** Accept smaller, values-aligned user base as feature not bug

**Priority:** P2

---

### R-M3: Network effects never achieve critical mass

**Description:** Platform never reaches density needed for discovery/collaboration value

**Probability:** Medium

**Impact:** High - Platform remains individual tool only

**Indicators:**

- Flat user growth after initial adoption
- Discovery searches return few results
- Low collaboration activity

**Mitigation:**

- Focus on specific geographic areas first
- Manual community seeding
- Partnership with existing organizations
- Accept slower growth for sustainable model

**Contingency:** Remain valuable as individual documentation tool, de-emphasize social features

**Priority:** P1

---

### R-M4: Users prefer existing platforms despite flaws

**Description:** Switching cost to ditup exceeds perceived benefit over Facebook Groups, Nextdoor, etc.

**Probability:** High

**Impact:** High - Platform doesn't achieve adoption

**Indicators:**

- Feedback: "I just use Nextdoor for this"
- Users try ditup but return to existing platforms
- Features compared unfavorably to established tools

**Mitigation:**

- Don't compete directly - complementary positioning
- Focus on use cases existing platforms fail at (action completion)
- Accept that some users won't switch
- Build for users dissatisfied with existing options

**Contingency:** Niche positioning for values-aligned users who reject mainstream platforms

**Priority:** P1

---

### R-M5: Loneliness/connection promise not delivered

**Description:** Users join hoping to meet people, don't form actual relationships

**Probability:** Medium

**Impact:** High - Core emotional value proposition fails

**Indicators:**

- Feedback: "I still feel alone"
- Low progression from discovery to collaboration
- Users participate in actions but don't form ongoing connections

**Mitigation:**

- Be honest about platform's role (facilitates, doesn't guarantee)
- Encourage recurring involvement with same people
- Working groups for ongoing collaboration
- Don't overpromise connection in marketing

**Contingency:** Reposition as utility tool rather than connection platform

**Priority:** P2

---

## Technical Risks

### R-T1: Solid pod provider reliability

**Description:** Pod providers go down, have bugs, or shut down

**Probability:** Medium

**Impact:** Medium - Users can't access data

**Indicators:**

- Error reports from users on specific providers
- Provider service status issues
- Provider announces shutdown

**Mitigation:**

- Test with multiple pod providers
- Graceful error handling when pod unavailable
- Local caching of data
- Guide users to reliable providers
- Data portability means users can switch providers

**Contingency:** Help users migrate to different provider

**Priority:** P2

---

### R-T2: Index server becomes bottleneck

**Description:** Central index creates single point of failure or can't scale

**Probability:** Medium

**Impact:** Medium - Discovery stops working

**Indicators:**

- Slow search responses
- Index server downtime
- Data sync delays

**Mitigation:**

- Design for federation from start
- Cache common queries
- Monitor performance
- Have backup index strategy

**Contingency:** Run multiple index instances, failover capability

**Priority:** P2

---

### R-T3: Photo storage exceeds pod limits

**Description:** Users can't upload photos because pod storage limited

**Probability:** Medium

**Impact:** Low - Degrades experience but not critical

**Indicators:**

- Upload failures
- User complaints about storage limits
- Reduced photo usage

**Mitigation:**

- Image compression before upload
- Inform users of storage limits
- Suggest storage upgrades
- Optional external image hosting

**Contingency:** Make photos optional, not required

**Priority:** P3

---

### R-T4: Wikidata API reliability

**Description:** Wikidata API for topic tagging unavailable or slow

**Probability:** Low

**Impact:** Low - Topics are optional feature

**Indicators:**

- Topic search fails
- Slow autocomplete

**Mitigation:**

- Cache common topics locally
- Fallback to free text tags
- Async loading for topic search

**Contingency:** Manual topic list instead of Wikidata integration

**Priority:** P3

---

### R-T5: Cross-browser compatibility issues

**Description:** App doesn't work correctly on some browsers/devices

**Probability:** Medium

**Impact:** Medium - Excludes some users

**Indicators:**

- Bug reports from specific browsers
- Layout issues on mobile
- Features not working on Safari

**Mitigation:**

- Cross-browser testing
- Mobile-first design
- Progressive enhancement
- Monitor error logs by browser

**Contingency:** Document supported browsers, prioritize most common

**Priority:** P2

---

## Competitive Risks

### R-C1: Major platform copies features

**Description:** Facebook, Nextdoor, or Meetup adds issue documentation, attendance tracking, or reputation

**Probability:** Medium

**Impact:** Medium - Harder to differentiate

**Indicators:**

- Competitor feature announcements
- Press coverage of similar features
- Users: "Nextdoor does this now"

**Mitigation:**

- Data ownership remains differentiator
- Build community/values that can't be copied
- Move faster on niche features
- Accept that some features will be commoditized

**Contingency:** Emphasize values (data ownership, no ads) over features

**Priority:** P2

---

### R-C2: Hylo or similar platform gains traction

**Description:** Values-aligned competitor achieves network effects first

**Probability:** Low

**Impact:** Medium - Same target audience

**Indicators:**

- Hylo user growth
- Target users already on Hylo
- Feedback: "Why not just use Hylo?"

**Mitigation:**

- Differentiate on attendance verification, ungrouped discovery
- Consider interoperability rather than competition
- Different geographic focus
- Emphasize Solid data ownership

**Contingency:** Explore merger/partnership if competing for same small niche

**Priority:** P3

---

### R-C3: Government platforms expand

**Description:** FixMyStreet, SeeClickFix, or municipal platforms add peer collaboration

**Probability:** Low

**Impact:** Low - Different value proposition

**Indicators:**

- Municipal platforms add social features
- Government partnerships with competitors

**Mitigation:**

- Position as complementary, not competing
- Peer organizing different from government reporting
- Focus on action completion, not issue reporting to authorities

**Contingency:** Partner with rather than compete against government platforms

**Priority:** P3

---

## Sustainability Risks

### R-S1: No viable funding model

**Description:** Platform can't sustain operations without advertising or VC funding

**Probability:** Medium

**Impact:** High - Platform shuts down

**Indicators:**

- Running out of runway
- Grant applications rejected
- Donations insufficient
- No sustainable revenue source

**Mitigation:**

- Apply for civic tech grants early
- Explore organizational/nonprofit subscriptions
- Donation model with transparent costs
- Keep infrastructure costs minimal
- Consider premium features (carefully)

**Contingency:** Reduce scope to sustainable core, volunteer-run model

**Priority:** P1

---

### R-S2: Founder burnout

**Description:** Solo or small team exhausts before achieving sustainability

**Probability:** High

**Impact:** High - Platform development stops

**Indicators:**

- Slow development progress
- Reduced responsiveness
- Personal stress indicators

**Mitigation:**

- Realistic timelines
- Scope control (MVP discipline)
- Community contributors
- Self-care practices
- Clear milestones for go/no-go decisions

**Contingency:** Open source handoff if founder cannot continue

**Priority:** P1

---

### R-S3: Solid ecosystem stagnates

**Description:** Solid protocol doesn't achieve broader adoption, pod providers disappear

**Probability:** Medium

**Impact:** Medium - Technical foundation weakens

**Indicators:**

- Pod providers shutting down
- Solid development slowing
- No new Solid apps

**Mitigation:**

- Monitor Solid ecosystem health
- Relationships with multiple pod providers
- Data export always available
- Portable data means migration possible

**Contingency:** Consider alternative decentralized protocols or self-hosting guidance

**Priority:** P2

---

## Reputational Risks

### R-R1: Platform used for harmful organizing

**Description:** Bad actors use ditup to organize harassment, extremism, or illegal activity

**Probability:** Medium

**Impact:** High - Trust destroyed, potential legal issues

**Indicators:**

- Reports of harmful content
- Press coverage of misuse
- Organized abuse patterns

**Mitigation:**

- Clear community guidelines
- Content moderation plan
- Report functionality
- Geographic verification considerations
- Terms of service with enforcement

**Contingency:** Remove offending content/users, public statement, review policies

**Priority:** P2

---

### R-R2: Data breach or privacy failure

**Description:** User data exposed or privacy controls fail

**Probability:** Low (due to Solid architecture)

**Impact:** High - Trust destroyed

**Indicators:**

- Security vulnerability discovered
- User reports of exposed data
- Privacy control bugs

**Mitigation:**

- Security audits
- Minimal data in index (pointers only)
- User controls all primary data
- Transparent privacy architecture

**Contingency:** Disclosure, fix, communication, third-party audit

**Priority:** P2

---

### R-R3: Platform perceived as failed experiment

**Description:** Low adoption makes platform seem dead, deterring new users

**Probability:** Medium

**Impact:** Medium - Negative perception spiral

**Indicators:**

- Press coverage of low adoption
- User feedback about empty platform
- "Ghost town" perception

**Mitigation:**

- Don't launch discovery until density exists
- Seed specific communities rather than going broad
- Honest messaging about growth stage
- Celebrate small wins publicly

**Contingency:** Reframe as intentionally niche, quality over quantity

**Priority:** P2

---

## Risk Summary by Priority

### P1 - Address Immediately

| ID   | Risk                                      | Probability | Impact |
| ---- | ----------------------------------------- | ----------- | ------ |
| R-P1 | Documentation not compelling              | Medium      | High   |
| R-P3 | Actions don't complete                    | Medium      | High   |
| R-M1 | No demand for civic documentation         | Medium      | High   |
| R-M3 | Network effects don't reach critical mass | Medium      | High   |
| R-M4 | Users prefer existing platforms           | High        | High   |
| R-S1 | No viable funding model                   | Medium      | High   |
| R-S2 | Founder burnout                           | High        | High   |

### P2 - Plan Mitigation

| ID   | Risk                                   | Probability | Impact |
| ---- | -------------------------------------- | ----------- | ------ |
| R-P2 | Discovery empty at launch              | High        | Medium |
| R-P4 | Attendance verification gamed/rejected | Medium      | Medium |
| R-P5 | Reputation system doesn't create value | Medium      | Medium |
| R-M2 | Solid requirement limits adoption      | High        | Medium |
| R-M5 | Connection promise not delivered       | Medium      | High   |
| R-T1 | Solid pod provider reliability         | Medium      | Medium |
| R-T2 | Index server bottleneck                | Medium      | Medium |
| R-T5 | Cross-browser compatibility            | Medium      | Medium |
| R-C1 | Major platform copies features         | Medium      | Medium |
| R-S3 | Solid ecosystem stagnates              | Medium      | Medium |
| R-R1 | Platform used for harmful organizing   | Medium      | High   |
| R-R2 | Data breach or privacy failure         | Low         | High   |
| R-R3 | Platform perceived as failed           | Medium      | Medium |

### P3 - Monitor

| ID   | Risk                        | Probability | Impact |
| ---- | --------------------------- | ----------- | ------ |
| R-T3 | Photo storage limits        | Medium      | Low    |
| R-T4 | Wikidata API reliability    | Low         | Low    |
| R-C2 | Hylo gains traction         | Low         | Medium |
| R-C3 | Government platforms expand | Low         | Low    |

---

---

---
