# Smart Budget Planner — Interview Questions

Objective: collect detailed requirements and decisions across technical, implementation, UI/UX, privacy, ML, integrations, testing, and rollout to turn the project plan into an actionable spec and backlog.

Instructions: Answer each question as specifically as possible; add examples, priorities, and constraints where applicable.

---

## Project vision & priorities

1. What is the single most important user problem this app must solve on Day 1? What is the second-most important?
2. Which features from the plan must be in the MVP (must-have) versus nice-to-have for launch?
3. What success metrics (one primary and two secondary) should we prioritize for the first 3 months after launch?
4. Are there regulatory or compliance constraints we must meet (e.g., GDPR, PCI, regional banking rules)?

## Target users & personas

5. Describe the primary user persona(s) in detail: tech-savviness, devices used, monthly income range, budgeting habits.
6. Will there be distinct personas (e.g., single user vs household vs small business)? How should feature access differ per persona?
7. What onboarding experience do you expect for non-technical users vs power users?

## Authentication, accounts & storage

8. Should the app default to local-first or cloud-first for new users? Should the user be prompted explicitly to choose at onboarding?
9. For cloud mode, what authentication providers do you want (email/password, magic link, Google, Apple, OAuth)?
10. Is multi-account (multiple bank accounts) support required at MVP? How should accounts be represented (linked external accounts vs manual accounts)?
11. For local storage, do you require device-level encryption tied to user passphrase? Any backup/export policy requirements?

## Transactions & data handling

12. What transaction fields are mandatory (e.g., date, amount, merchant, category, notes)? Any custom fields you'd want users to be able to add?
13. Should the app normalize merchants (merchant canonicalization) and how aggressively (exact match, fuzzy, human-in-loop)?
14. How should refunds, transfers, and split transactions be represented and displayed?
15. Are multi-currency transactions required at MVP? If yes, should we support live FX or manual rates?

## Import, sync & integrations

16. Which bank integration approach do you prefer first: CSV import only, banking API (Plaid/open banking), or both at launch?
17. If using banking APIs, do you have preferred providers/regions to support initially?
18. What expectations do you have for sync frequency and conflict resolution semantics (last-write-wins, merge fields, user resolution)?
19. Should we support scheduled automatic imports (daily/weekly) or only user-initiated syncs at first?

## Categorization, rules & ML

20. How deterministic should rules be vs ML suggestions? Do you want a rules-first system where user rules take priority?
21. Where should ML run: on-device (privacy) or server-side (easier training and updates)? Any platform constraints (low-end devices)?
22. Do you want a user interface for creating custom rules from corrections (e.g., "Always categorize Starbucks -> Coffee")?
23. What accuracy targets do you expect for ML suggestions at launch (e.g., ≥80%) and how will we measure them?

## Budgeting model & alerts

24. How should budgets be scoped: monthly only, weekly, or flexible periods? Should budgets support sub-categories and envelope-style allocations?
25. What alert channels should be supported at MVP (in-app, push, email, SMS)? Any preferences on which to ship first?
26. How do you expect budgeting overflows to be handled (allow negative, reallocate from other budgets, block spending alerts)?
27. Should there be automatic rollovers for unspent budget amounts?

## Forecasting & recommendations

28. What forecasting horizon is required (30-day, 90-day, custom)? Which inputs should drive forecasts (recurring bills, average variable spend, planned goals)?
29. For recommendations (e.g., cancel subscriptions), what level of confidence or evidence should be shown to users before making a suggestion?
30. Should recommendations be actionable in-app (e.g., button to cancel subscription) or only advisory links?

## UI/UX design

31. Do you have brand or design guidelines already (color palette, tone, logo)? Any accessibility requirements beyond WCAG basics?
32. Which platforms should have first-class design: web, iOS, Android, or a responsive web app initially?
33. For charts and visualizations, do you prefer simple, clean visuals or detailed, data-dense dashboards for power users?
34. What onboarding steps are essential to reduce churn (e.g., import transactions, set income, create first budget)?

## Data model & storage specifics

35. Any specific schema constraints or relations you want in the data model (e.g., immutable transaction IDs, versioning)?
36. Do you require full audit logging for edits and sync operations?
37. How long should historical data be retained by default? Should users be able to purge or archive old data easily?

## Security, privacy & compliance

38. What encryption model do you prefer for cloud backups (server-side encryption vs end-to-end user-key encryption)?
39. Are there corporate or enterprise features (SSO, admin controls, centralized billing) that should influence authentication choices?
40. What telemetry and analytics are acceptable (anonymized events only vs optional user opt-in)?

## Performance & scale

41. What are target performance SLAs for UI interactions (e.g., open dashboard under X seconds for <5k transactions)?
42. Expected user scale at launch and at 12 months (rough user counts) to inform backend sizing?

## Testing, QA & release strategy

43. Which areas must have automated tests before release (e.g., budget math, import, sync)?
44. Do you want a public beta, closed beta, or internal dogfooding first? Preferred beta length?
45. Any regulatory testing or external audits required before launch?

## Analytics, monitoring & observability

46. What events are critical to track for product decisions (onboarding drop-off, import success/failure, category overrides)?
47. Do you want error reporting (Sentry), performance monitoring, and usage analytics integrated from day one?

## CI/CD, infra & ops

48. Preferred cloud provider and infra constraints (AWS, Azure, GCP, on-prem)?
49. Any cost constraints or budgets for infra in the first year?
50. Do you want containerized deployments (Docker) and GitHub Actions for CI by default?

## Internationalization & localization

51. Which languages and locales should be supported at launch? Any region-specific formatting rules (dates, currency)?
52. Do you require multi-currency accounting and reporting out-of-the-box?

## Legal & billing

53. Will the app be free, freemium, or paid at launch? If paid, what billing model (subscription, one-time, tiers)?
54. Any special legal disclaimers or financial advice disclosures required in the product?

## UX edge cases & error handling

55. How should the app behave when offline with local edits and later syncing?
56. What's the desired UX for failed imports or partial imports? How should we present errors and recovery steps?
57. How should we handle duplicate transactions from multiple sources (bank + manual)?

## Roadmap, milestones & resourcing

58. What is your target timeline for MVP release? Are there hard deadlines (e.g., trade shows, investor commitments)?
59. What team size and skill sets do you have or plan to hire (frontend, backend, ML, design, QA)?
60. Which features can be deferred to post-MVP without jeopardizing the launch goals?

## Trade-offs, constraints, and concerns

61. What are your biggest technical concerns (data loss, ML bias, bank API changes)?
62. Which trade-offs are acceptable (slower ML on-device vs faster server-side model; no bank integrations at launch vs faster time-to-market)?
63. Are there privacy trade-offs you will not accept (e.g., storing plaintext transaction data on servers)?

## Acceptance criteria & sign-off

64. What does “done” look like for the MVP? Define a short checklist for product acceptance.
65. Who are the stakeholders required for sign-off at each milestone (spec review, beta, launch)?

---

Optional: add any quick notes or constraints at the top of your answers (e.g., "No external banking APIs in 2026 due to legal constraints in our region").

Thank you — once you answer these, I will synthesize them into a detailed spec, backlog, and wireframe checklist.

## Answers — Batch 1 (Project vision & priorities)

Q1 — Single most important problem (Day 1) and second-most:

- Problem 1: Manual Fatigue — users abandon if they must type every transaction.
  - Solution: Automated Synchronization via bank APIs (e.g., Plaid) or ultra-fast receipt scanning.
  - Goal: User opens the app and sees their real financial state reflected instantly.
  - Why it matters: Without automatic data, the app provides no immediate value.
- Problem 2: Contextual Blindness — raw transactions lack insight.
  - Solution: Instant Categorization and Visual Health Checks using LLMs or smart tagging.
  - Goal: Show immediate "win" (e.g., progress bar or Traffic Light) to surface surprising patterns.

Q2 — Refined MVP feature set (must-have vs nice-to-have):

- Must-have:
  - Onboarding: Secure login + currency selection
  - Input: Manual entry + CSV uploader
  - Organization: Simple rule-based categorization
  - Tracking: Monthly budget limits per category
  - Visuals: One "Spend vs. Budget" dashboard and one "Spending by Category" pie/donut chart
- Nice-to-have (post-MVP):
  - Bank API integrations (full sync)
  - Receipt OCR
  - Advanced ML-driven categorization enhancements
  - Multi-device collaboration

Q3 — Success metrics (first 3 months):

- Primary: Activation Rate — the onboarding "Aha! Moment" reachability (users who complete onboarding and see automated data/insight)
- Secondary: Day-30 Retention — continued use after 30 days
- Secondary: Stickiness (DAU/MAU) — habit formation metric

Q4 — Regulatory & compliance constraints:

- Data Privacy: NDPC compliance, annual audits, explicit consent, breach notification within 72 hours
- Banking Data: CBN compliance with Open Banking API standards
- Security: PCI SSC / CBN (PCI DSS if handling card data) & encryption requirements
- Identity: NIBSS / NIMC (BVN or NIN validation for onboarding)
- Consumer Rights: FCCPC — transparent pricing and clear Terms & Conditions

---

AI_PROMPT (translate this into product requirements/backlog items):
"Implement Day-1 product that minimizes manual entry and delivers immediate insight.

- Priority 1: Integrate CSV import + rapid path to bank API onboarding (Plaid or regional equivalent) and optional receipt OCR; if bank APIs are unavailable, ensure CSV/receipt paths show transactions on first open.
- Priority 2: Provide deterministic rule-based categorization with an LLM-assisted suggestion layer; display a single clear dashboard showing 'Spend vs Budget' and 'Spending by Category' with a Traffic-Light or progress-bar health indicator.
- Acceptance criteria: onboarding activation rate target defined; users must see auto-populated transactions and at least one insight (category overspend or trend) within first session. Ensure compliance with NDPC, CBN, PCI DSS (where applicable), NIBSS/NIMC identity checks, and consumer rights disclosures."

Add further answers below when ready.

## Answers — Batch 2 (Target users & personas)

Q5 — Primary user personas:

- Busy professionals wanting automated budgeting.
  - Likely values time-saving automation, uses mobile and desktop, wants clear visuals and quick insights.
- Early savers and people tracking variable income.
  - Needs goal-based features, flexible budgets, and forgiving import/cleanup tools.
- Power users wanting integrations and custom rules.
  - Comfortable with CSV/OFX, regex rules, API access, multi-currency and portfolio aggregation.

Q6 — Distinct personas and UX differences:

- Yes. Indicate user type via a small icon with the user type shown on hover/touch (e.g., "Pro", "Household").
- UX differences:
  - Non-technical users: simplified flows, sensible defaults, fewer choices up-front.
  - Power users: direct access to CSV/OFX import, rule-maker, API keys, and advanced toggles.

Q7 — Onboarding experience (non-technical vs power users):

Non-Technical Onboarding

- Goal: Prove the app is "smart" without making the user feel "stupid."
- Steps to the "Aha!" Moment:
  1. The 30-Second Hook: Show a "Sample Life" dashboard for ~5 seconds so users glimpse a finished budget (clean charts, green balances).
  2. The Magic Link: Prompt to connect one account via Plaid or regional equivalent; show last 5 transactions auto-categorized.
  3. The First Win: Ask user to set one "Vibe" goal (e.g., "Weekend Trip"); show progress bar populated from current balance.
- Default Choices ("Don't Make Me Think"):
  - Automatic Categorization: Enabled by default.
  - Rounding Up: Default enabled to start a Passive Savings bucket.
  - Notifications: Nudges only (e.g., 80% dining budget warning).

Power User Onboarding

- Goal: Prove flexibility and robustness to replace spreadsheets.
- Steps to the "Aha!" Moment:
  1. The "Pro" Skip: Prominent button "I know what I'm doing: Import CSV/OFX" on first screen.
  2. The Rule-Maker: Quick path to create Regex/Boolean rules (e.g., vendor contains 'Amazon' AND amount > $100 → tag 'Business Equipment').
  3. Multi-Asset Linking: Allow linking brokerage, crypto wallets, and HYSA.
- Optional Advanced Settings ("Pop the Hood"):
  - Zero-Based Budgeting Mode toggle.
  - Sankey diagrams for cash flow visualization.
  - Personal API key for data exports and automation.

AI_PROMPT (translate this into onboarding UX requirements and acceptance tests):
"Design two onboarding paths: a simplified 'non-technical' path that shows a sample dashboard, connects one account via Plaid (or CSV fallback), auto-categorizes recent transactions, and encourages setting a single goal; and an advanced 'power user' path exposing CSV/OFX import, custom regex rules, multi-asset linking, and API access. Default to automatic categorization, round-up savings enabled, and 'nudge' notifications. Acceptance: new users reach an Aha! moment (see auto-populated transactions + at least one visual insight) within first session."

---

Add further answers below when ready.

## Answers — Batch 3 (Authentication & Storage)

Q8 — Default mode:

- Local-first. Choose a sensible default: start users in local-first mode and prompt an explicit choice for cloud sync during onboarding.

Q9 — Cloud authentication providers:

- Email + password only at launch. (No social logins required initially.)

Q10 — Multi-account support at MVP:

- Do not link external bank accounts for now; rely on manual accounts and CSV/OFX import paths.

Q11 — Local storage & encryption:

- Local encryption mandatory: use AES-256 with hardware-backed keys where available.

AI_PROMPT (translate this into implementation tasks):
"Make the product local-first by default and surface an explicit cloud-sync opt-in during onboarding. Implement cloud auth via email+password for users who opt into sync. Defer bank account linking for MVP — support manual accounts and CSV/OFX import only. Enforce device-local encryption using AES-256 with hardware-backed keys; document fallback behavior for devices without hardware-backed key stores."

---

Proceed when ready for the next batch (Transactions & Data Handling Q12–Q15).

## Answers — Batch 4 (Transactions & Data Handling)

Q12 — Mandatory transaction fields and "smart" types:

- `Payment Method` (Dropdown): Tracks whether the money came from a Credit Card, Debit, or Cash — important for debt vs cash flow insights.
- `Recurrence` (Toggle): Marks subscriptions or recurring bills so forecasts and savings rules treat them differently.
- `Tax Deductible?` (Checkbox): Important for freelancers and business users during tax season.
- `Need vs. Want` (Toggle/Scale): Behavioral signal to help recommendations and habit nudges.
- `Split Transaction` (Function): Allow splitting a single transaction into multiple category lines (e.g., $100 -> Groceries $80 + Home Decor $20).

Q13 — Merchant normalization approach:

- Moderately aggressive: combine exact matches, fuzzy matching, and a canonical merchant database. Surface ambiguous matches to the user for confirmation (human-in-the-loop) and learn from corrections.

Q14 — Split transaction UX (decision):

- Inline split editor in transaction detail: user can "Split" a transaction, add multiple lines with `category`, `amount` (or percent), and optional `notes` per line.
- Display: show split transactions as a single collapsed row in lists with a badge "Split"; expanding reveals line-item breakdown.
- Import behavior: detect obvious splits (multi-line receipts) and offer suggested splits for user confirmation after import.

Q15 — Multi-currency at MVP:

- Defer multi-currency support to post-MVP.

AI_PROMPT (translate into implementation tasks):
"Extend the transaction model to include `payment_method`, `recurrence`, `tax_deductible`, `need_vs_want`, and support for transaction splits (line items). Implement a moderately-aggressive merchant normalization pipeline: exact -> fuzzy -> canonical DB, with ambiguous results flagged for user confirmation and feedback used to improve matching. Build an inline split editor in the transaction detail view that allows adding/removing split lines with amounts or percentages; show collapsed 'Split' rows in lists and suggested splits after CSV import. Defer multicurrency handling to a future milestone."

---

Proceed when ready for the next batch (Import, Sync & Integrations Q16–Q19).

## Answers — Batch 5 (Categorization, Rules & ML)

Q20 — Rules vs ML priority (Rules First with clear exceptions):

- Core principle: Rules First. User-defined rules represent explicit user intent and must take precedence over ML in normal operation.
- Why: Trust, predictability, and deterministic behavior — rules are debuggable and serve as ground truth for retraining.
- Exceptions where ML should interrupt or surface an exception:
  1. Fraud / Anomaly Detection: If ML detects an anomalous value (e.g., $2,000 water bill vs $50 average), flag for manual review rather than silently following the rule.
  2. Stale Rule Detection: If ML detects a consistent category mismatch vs an old rule, prompt the user: "Your rule says X, but we think Y — update rule?"
  3. High-Confidence Pattern Shift: If users repeatedly override a rule and ML identifies a new pattern, suggest refining the rule (don't auto-override without consent).

Q21 — Where ML should run (privacy-first + hybrid strategy):

- Recommendation: Privacy-first — run core categorization and immediate anomaly detection on-device using TFLite/Core ML where possible.
- Hybrid approach: Use split-inference — on-device for parsing, merchant match, and low-latency alerts; server-side for heavy training, cross-user pattern discovery, and global model updates using differential privacy or federated learning.
- Practical rollout: Prototype server-side to iterate quickly, then distill stable models to on-device for privacy and cost savings.
- Device constraints & implementation notes:
  - Keep on-device models small (target <50–100MB); use quantization (8-bit) to reduce size and power.
  - Avoid continuous background inference to preserve battery; run inference on new imports/syncs or low-frequency schedules.
  - Use dynamic delivery to download ML assets only when users opt into Smart Insights.

Q22 — Custom rules UI (progressive disclosure + smart suggestion):

- Yes — provide a UI to create rules from corrections with progressive disclosure: simple conditions by default, advanced regex behind an "Advanced" toggle.
- Correction flow: After user corrects a transaction, show a prompt: "Always categorize transactions like this as X?" with options: Yes / No / Edit Rule.
- Supported rule types:
  - Merchant Contains (easy default)
  - Amount Thresholds (Greater than / Less than)
  - Date/Account conditions
  - Regex (hidden under Advanced for power users)
- Rule builder UI: "If" (attribute + operator + value) → "Then" (assign category, tag, exclude from budget). Include a "Test Your Rule" preview showing affected transactions and counts before saving.

Q23 — ML accuracy targets and measurement:

- Target: ≥80% suggestion accuracy at launch for baseline categorization.
- Measurement strategy:
  - Use a labeled validation set (holdout historical transactions) and report precision/recall and overall accuracy.
  - Track live metrics: suggestion acceptance rate, user override rate, and post-correction improvement per-user.
  - Use user-corrected data (with consent) to continually retrain and measure model drift.

AI_PROMPT (translate into implementation backlog items):
"Implement rules-first categorization pipeline where user rules take precedence; add exception workflows for anomalies, stale-rule prompts, and high-confidence pattern-shift suggestions. Adopt a privacy-first ML approach: on-device for core categorization and alerts, hybrid with server-side training and differential-privacy aggregation. Build a progressive-rule UI: auto-prompt on corrections, provide Merchant/Amount/Date conditions and hidden regex for power users, and include 'Test Your Rule' previews. Reach ≥80% suggestion accuracy at launch, measured by validation set and live user-acceptance metrics; instrument override and acceptance events for continuous retraining."

---

Proceed when ready for the next batch (Budgeting model & alerts Q24–Q27).

## Answers — Batch 6 (Budgeting model & alerts)

Q24 — Budget scope and structure:

- Yes: support flexible periods (monthly by default, with optional weekly or custom ranges).
- Support sub-categories and envelope-style allocations to allow both simple and granular budgeting.

Q25 — Alert channels at MVP:

- In-app only for initial launch (push notifications can be added later); prioritize unobtrusive "nudge" alerts.

Q26 — Handling budget overflows:

- Primary behavior: alert and suggest actions (notify user when nearing/exceeding budgets and present action suggestions such as reallocate from another budget, pause subscriptions, or tips to reduce spend).
- Do not auto-reallocate or block; keep control with the user.

Q27 — Automatic rollovers:

- Leave rollovers to the user's discretion. Offer a per-budget toggle for "rollover unspent amount" and sensible defaults (off for some categories, on for savings buckets).

AI_PROMPT (translate into backlog/user stories):
"Implement flexible budgeting: monthly default with optional weekly/custom periods, and support for sub-categories/envelope-style allocations. Ship in-app alerts only for MVP with 'nudge' wording; include suggested actions on overflow (reallocate, pause subscriptions, tips). Do not auto-reallocate or block. Add per-budget rollover toggle with sensible defaults (e.g., off for variable expenses, on for savings)."

---

Proceed when ready for the next batch (Forecasting & recommendations Q28–Q30).
