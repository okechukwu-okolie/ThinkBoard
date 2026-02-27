# Smart Budget Planner — QA Test Cases

This document lists Quality Assurance test cases to verify the functionality of features described in the project plan. Each test includes Purpose, Preconditions, Steps, Expected Result, and Pass Criteria.

## Test naming conventions

- Prefix: CT = Core Test, ET = Extended Test
- Numbering sequential per section (e.g., CT-01)

---

## Core Features (MVP)

### CT-01: Onboarding — Local Mode

- Purpose: Verify user can complete local-first onboarding and create a profile.
- Preconditions: App fresh install; no existing profiles.
- Steps:
  1. Launch app and select "Local" storage.
  2. Enter name, monthly income, and recurring bills.
  3. Complete setup and open dashboard.
- Expected Result: Profile saved locally; dashboard displays provided income and bills.
- Pass Criteria: Profile persists after app restart; sensitive data stored encrypted (if enabled).

### CT-02: Onboarding — Cloud Mode

- Purpose: Verify cloud signup, auth flow, and encrypted backup creation.
- Preconditions: Network available; valid test account credentials.
- Steps:
  1. Launch app and select "Cloud".
  2. Sign up / sign in via OAuth or email+password.
  3. Opt into encrypted backup.
- Expected Result: Account created, token received, encrypted backup present on server.
- Pass Criteria: Login succeeds; backup can be requested via API; logout clears local session.

### CT-03: Manual Transaction Entry

- Purpose: Ensure manual transactions can be added, edited, and deleted.
- Preconditions: User logged in with an account and at least one local account created.
- Steps:
  1. Add transaction: date, amount, merchant, category (optional).
  2. Edit transaction merchant and amount.
  3. Delete transaction.
- Expected Result: Transaction appears in list after add; edits persist; deletion removes item.
- Pass Criteria: All operations reflect in UI and storage immediately.

### CT-04: CSV Import

- Purpose: Verify CSV import accepts common bank export formats and maps fields correctly.
- Preconditions: CSV sample files for multiple banks available.
- Steps:
  1. Import sample CSV with date, description, amount columns.
  2. Map columns in importer UI if prompted.
  3. Complete import and review imported transactions.
- Expected Result: All rows imported as transactions with correct dates and amounts.
- Pass Criteria: No missing rows; import summary shows counts and errors; errors are reported with line numbers.

### CT-05: Automatic Categorization (Rules + ML Fallback)

- Purpose: Validate deterministic rules and ML categorization work and user override persists.
- Preconditions: Predefined rule exists (e.g., merchant contains "Starbucks" → `Coffee`). ML model seeded with baseline training.
- Steps:
  1. Add transaction with merchant matching a rule; verify category auto-assigned.
  2. Add transaction without rule; verify ML suggests a category.
  3. User overrides category and saves.
- Expected Result: Rule-based categorization overrides ML; ML suggestions can be accepted or corrected; user corrections update personal rules or training feedback.
- Pass Criteria: Rule hits 100% for matched patterns; ML suggestion accuracy ≥ 80% on validation dataset; overrides persist and affect future suggestions.

### CT-06: Budget Creation, Thresholds, Alerts

- Purpose: Ensure budgets can be created, thresholds enforced, and alerts delivered.
- Preconditions: User has transactions and categories present.
- Steps:
  1. Create a monthly budget for `Groceries` with limit $400 and alert at 90%.
  2. Add transactions to approach and exceed threshold.
- Expected Result: Progress bar updates; notification when 90% reached and when limit exceeded.
- Pass Criteria: Alerts appear within the UI and (if enabled) as push/email; budget roll-up calculations correct.

### CT-07: Cashflow Forecasting

- Purpose: Validate forecasts update and reflect recurring items and variable transactions.
- Preconditions: Recurring income and bills configured; at least 30 days of historical transactions.
- Steps:
  1. Generate 30-day cashflow forecast.
  2. Add an unexpected expense and regenerate forecast.
- Expected Result: Forecast shows expected balances over time and updates after new transactions.
- Pass Criteria: Forecast calculation matches deterministic model; forecast updates within 5 seconds for small dataset.

### CT-08: Visualizations (Spend by Category, Trends)

- Purpose: Confirm charts render correctly and filters work.
- Preconditions: Transactions spanning multiple categories and at least two months.
- Steps:
  1. Open Insights → Spend by Category for last 30 days.
  2. Apply category and date filters.
- Expected Result: Charts render without overlap; filter results match table data.
- Pass Criteria: Visuals load within 2 seconds; numbers aggregate to same totals shown in tables.

### CT-09: Export & Backup

- Purpose: Verify export formats and encrypted backup/restore.
- Preconditions: Transactions present; cloud backup enabled (if applicable).
- Steps:
  1. Export transactions to CSV and JSON.
  2. Create local encrypted backup; restore to a fresh profile.
- Expected Result: Export files contain expected fields; restore recreates transactions and budgets.
- Pass Criteria: Exports open in standard spreadsheet apps; restored profile matches original (within immutable IDs tolerance).

---

## Extended Features (Post-MVP)

### ET-01: Bank API Integration (Plaid / Open Banking)

- Purpose: Validate account linking, transaction sync, and error handling.
- Preconditions: Test Plaid sandbox credentials or partner sandbox.
- Steps:
  1. Link a test bank account via API.
  2. Trigger a sync and confirm transactions import.
  3. Simulate API downtime and validate graceful degradation.
- Expected Result: Accounts link; transactions import incrementally; app surfaces API errors without data loss.
- Pass Criteria: Sync respects rate limits and idempotency; retries obey backoff policy.

### ET-02: Goal-Based Planning (Savings, Debt Payoff)

- Purpose: Ensure goals can be created and progress tracked.
- Preconditions: User has an account with balance and recurring income configured.
- Steps:
  1. Create a savings goal: $5,000 in 12 months.
  2. Simulate monthly allocations and check progress and ETA.
- Expected Result: Goal progress updates correctly; suggested monthly contribution calculated.
- Pass Criteria: ETA matches target when contributions applied; UI warns if goal is unrealistic given income.

### ET-03: Smart Recommendations

- Purpose: Verify actionable recommendations are generated when patterns indicate opportunity.
- Preconditions: Transaction history includes recurring subscriptions and overspend categories.
- Steps:
  1. Run recommendations engine.
  2. Inspect recommendations for subscription cuts, category adjustments.
- Expected Result: Recommendations are relevant and link to actions (e.g., cancel, reallocate budget).
- Pass Criteria: Recommendations precision ≥ 70% in pilot; user action from recommendation logged.

### ET-04: Multi-Device Sync & Conflict Resolution

- Purpose: Test sync behavior and conflict resolution for concurrent edits.
- Preconditions: Two devices logged into same cloud account; same dataset.
- Steps:
  1. On Device A edit a transaction amount.
  2. On Device B concurrently edit the same transaction to a different amount and sync.
  3. Observe conflict resolution flow.
- Expected Result: Conflicts surfaced with clear UI; merge rules applied (last-write-with-merge or user choice).
- Pass Criteria: No data lost; audit trail records both edits and final resolution.

### ET-05: NLP-based Query and Voice Input

- Purpose: Validate natural-language queries and voice input parsing.
- Preconditions: Speech recognition available for platform; NLP model deployed.
- Steps:
  1. Ask: "How much did I spend on groceries last month?"
  2. Use voice input to add a transaction: "Spent $12.50 at Starbucks".
- Expected Result: NLP returns the correct figure and voice-add creates transaction with parsed fields.
- Pass Criteria: Intent accuracy ≥ 85% on validation set; voice-added transaction appears correctly categorized or suggested.

---

## Non-functional Tests

- Performance: App launch under 2s on supported devices; dashboard render under 1s for <5k transactions.
- Security: Penetration test of auth endpoints; verify TLS, proper token expiry, and input validation.
- Privacy: Verify local-first mode does not send identifiable data to servers; backups are encrypted with user key.
- Accessibility: Basic WCAG checks — keyboard navigation, high-contrast mode, screen-reader labels on key controls.

---

## Test Data & Automation Notes

- Create canonical test CSVs covering common bank formats and edge cases (negative refunds, multi-currency, malformed dates).
- Unit tests for budget math, forecast calculations, and rule engine.
- Integration tests for sync flows and API error simulations using mock servers.
- E2E tests (Cypress / Playwright) for critical user flows: onboarding, add transaction, create budget, export.

---

## Acceptance Criteria Summary

- Core functional flows succeed 100% in deterministic tests.
- ML-driven features meet defined accuracy thresholds (≥80% baseline).
- Sync and backup flows preserve data integrity with no silent data loss.
