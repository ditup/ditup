# Document 4: Onboarding Flow

---

## Principles

1. **Value first, account second** - Show what app does before requiring login
2. **Private by default** - Emphasize user control from the start
3. **Low commitment** - Don't ask for too much upfront
4. **Honest about network state** - Don't promise discovery before it exists
5. **Progressive disclosure** - Introduce features as needed

---

## Landing Page (Pre-Login)

### Hero Section

**Headline:** "Your archive of local issues and ideas"

**Subheadline:** "Document what's broken. Capture your solutions. Keep it private or share when ready."

**Primary CTA:** "Start documenting" → leads to signup/login

**Secondary CTA:** "See how it works" → scrolls to explanation

### Explanation Section

**Three-step visual:**

1. **Notice** - "See a problem in your area? Document it with a photo and location."
2. **Capture** - "Have an idea for improvement? Write it down, link it to issues."
3. **Own it** - "Your data stays on your Solid pod. Private by default. You control what's public."

### Honest positioning

"ditup is a personal tool for civic documentation. As more people join your area, you'll be able to discover each other and coordinate action. Right now, we're building the foundation."

**No fake social proof.** No "join thousands" if thousands don't exist.

### Footer notes

- "Built on Solid - your data, your control"
- "Open source"
- "No advertising, no data harvesting"

---

## Signup Flow

### Step 1: Choose Authentication

**Screen:** "Let's set up your account"

**Options:**

A) "I have a Solid pod" → Enter pod URL → Redirect to pod auth
B) "I need a Solid pod" → Pod provider selection

**For Option B - Pod provider selection:**

- List of 2-3 recommended providers
- Brief explanation: "A Solid pod is like your own personal data locker. Your ditup data lives there, not on our servers."
- Link to "Learn more about Solid"

**After auth:** Redirect back to ditup

---

### Step 2: Minimal Profile

**Screen:** "Let's set up your profile"

**Required fields:**

- Name (display name, not legal name)

**Optional fields (skippable):**

- Location (city/region) - "Helps us show relevant local content when available"
- Bio (one line)

**CTA:** "Continue" (with "I'll do this later" option for optional fields)

**Note:** Do NOT ask for interests yet. Let user explore first.

---

### Step 3: First Issue Prompt

**Screen:** "Document your first issue"

**Prompt:** "Notice anything in your area that could be better? A broken streetlight, dangerous intersection, missing bench, overgrown path?"

**Quick entry form:**

- Title (required): "What's the issue?"
- Photo (optional): "Add a photo"
- Location (optional): Map picker or "Use current location"

**CTA:** "Save issue"

**Skip option:** "I'll explore first" → goes to dashboard

**Why prompt immediately:** Creates value in first session. User has content immediately. Reduces empty-state problem.

---

### Step 4: Dashboard (Empty State)

**If user skipped issue creation:**

**Screen:** Dashboard with one empty card

**Message:** "Your civic archive is empty"

**Prompt:** "Start by documenting something you've noticed in your area"

**CTA:** "Document an issue" or "Capture an idea"

**Sidebar/nav visible:** Shows structure (Issues, Ideas, Map, Profile)

---

### Step 4b: Dashboard (With First Issue)

**If user created issue:**

**Screen:** Dashboard showing their issue

**Celebration (subtle):** "First issue documented ✓"

**Next prompt:** "Add more details?" or "Document another?"

**Sidebar visible:** User can explore

---

## First Session Goals

User should complete first session having:

1. ✓ Created account
2. ✓ Set basic profile (at minimum, name)
3. ✓ Created at least one issue OR explored the interface
4. ✓ Understood that data is on their pod
5. ✓ Understood that content is private by default

---

## Progressive Feature Introduction

### After 3+ issues documented

**Prompt:** "You've documented 3 issues. Want to add topic tags to organize them?"

**Leads to:** Topic tagging interface

### After 5+ issues documented

**Prompt:** "You're building a solid archive. Consider adding your interests to your profile for future matching."

**Leads to:** Profile interests selection

### After first public issue

**Prompt:** "This issue is now public. When others join your area, they'll be able to discover it."

**Sets expectation:** Discovery is future possibility, not current state

### After 2+ weeks of use

**Prompt:** "Want to see if others are documenting nearby?"

**If network density exists:** Show discovery features
**If no density:** "Not many people in your area yet. Invite someone who cares about local issues?"

---

## Empty State Handling

### Dashboard - No Issues

**Visual:** Simple illustration of map with pins

**Message:** "No issues documented yet"

**CTA:** "Document your first issue"

**Secondary:** "What counts as an issue?" → tooltip with examples

### Dashboard - No Ideas

**Visual:** Simple illustration of lightbulb

**Message:** "No ideas captured yet"

**CTA:** "Capture an idea"

**Secondary:** "Ideas can be linked to issues you've documented"

### Map View - No Located Issues

**Visual:** Map of user's location area

**Message:** "No issues pinned to map yet"

**CTA:** "Add location to your issues"

### Discovery (Phase 2) - No Nearby Users

**Visual:** Map of area

**Message:** "No other ditup users in your area yet"

**Subtext:** "You're early! Keep documenting. When others join, you'll find each other."

**CTA:** "Invite someone to join" (share link)

**No fake activity.** Don't show fake users or issues.

---

## Return Visit Flow

### Returning User (Logged In)

**Screen:** Dashboard

**Shows:** Recent issues/ideas, any new features introduced

**No re-onboarding** unless significant new feature

### Returning User (Logged Out)

**Screen:** Login page

**Prompt:** "Welcome back" with pod URL field

**After login:** Return to dashboard

### Returning User (Long Absence - 30+ days)

**Screen:** Dashboard with optional "What's new" modal

**Shows:** Summary of any platform updates

**Option:** Dismiss immediately, no forced reading

---

## Error States During Onboarding

### Pod Authentication Fails

**Message:** "Couldn't connect to your pod. This might be temporary."

**Actions:**

- "Try again"
- "Try a different pod"
- "Get help" → FAQ

### Pod Provider Down

**Message:** "The pod provider seems to be having issues."

**Actions:**

- "Check provider status" → external link
- "Try later"

### Network Error During Issue Creation

**Message:** "Couldn't save. No internet connection?"

**Actions:**

- "Save as draft" (local storage)
- "Try again"

**Behavior:** Draft auto-saved, sync when connection returns

---

## Onboarding Metrics to Track

| Metric                | Target         | Concern if below               |
| --------------------- | -------------- | ------------------------------ |
| Complete signup       | 70% of starts  | Signup friction too high       |
| Create first issue    | 50% of signups | Value proposition unclear      |
| Return within 7 days  | 30% of signups | No compelling reason to return |
| Create 3+ issues      | 20% of signups | Tool not useful enough         |
| Set profile interests | 15% of signups | Feature not discovered         |

---

## What Onboarding Does NOT Do

- ❌ Promise social features that don't work yet
- ❌ Show fake users or activity
- ❌ Require extensive profile before seeing value
- ❌ Force tutorials or tours
- ❌ Ask for email marketing consent (not needed with Solid)
- ❌ Gamify artificially (badges, streaks)

---

## Messaging Tone

**Do:**

- Clear, direct language
- Honest about current state
- Respectful of user's time
- Explain "why" not just "what"

**Don't:**

- Enthusiasm without substance ("Amazing! You're going to love this!")
- Vague promises ("Connect with your community!")
- Pressure tactics ("Complete your profile to unlock features!")
- Corporate speak ("Empower your civic journey!")

**Example comparison:**

❌ "Welcome to ditup! You're about to join a movement of changemakers building better communities together!"

✅ "Welcome. ditup is for documenting local issues and ideas. Let's get started."
