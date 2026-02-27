# Smart Budget Planner — Project Plan

## Vision

A privacy-first, intelligent budget planner that helps users set goals, automatically categorize spend, forecast cashflow, and receive personalized, actionable recommendations.

## Goals

- Help users reach financial goals with minimal friction.
- Automate categorization and forecasting using ML rules.
- Prioritize privacy and secure local-first storage with optional cloud sync.

## Target Users

- Busy professionals wanting automated budgeting.
- Early savers and people tracking variable income.
- Power users wanting integrations and custom rules.

## Core Features (MVP)

- Secure onboarding + account setup (local or cloud-backed).
- Manual transaction entry and CSV import.
- Automatic transaction categorization (rules + ML fallback).
- Budget creation per category with thresholds and alerts.
- Monthly / weekly cashflow forecast and actuals vs. budget.
- Simple visualizations (spend by category, trend lines).
- Export and backup options.

## Extended Features (post-MVP)

- Bank API integrations (Plaid / open banking).
- Goal-based planning (savings / debt payoff paths).
- Smart recommendations (cut subscriptions, shift budget).
- Multi-device sync and collaboration (household budgets).
- NLP-based query and voice input.

## Data Model (high-level)

- User: id, preferences, auth
- Account: id, provider, type, balance
- Transaction: id, account_id, date, amount, merchant, category, tags
- Budget: id, user_id, category, period, limit, alerts
- Rule: id, user_id, pattern, category, priority
- Goal: id, user_id, target_amount, deadline, progress

## Architecture & Components

- Client: React (Web) and/or React Native (Mobile) single codebase
- Backend: Node.js/Express or FastAPI for sync, auth, and integrations
- DB: SQLite for local storage; Postgres for cloud
- Sync: Conflict resolution strategy (last-write-with-merge rules)
- ML: Lightweight categorization model on-device or server-side fallback

## Tech Stack Recommendation

- Frontend: React + TypeScript, Tailwind CSS
- Mobile: React Native / Expo for rapid cross-platform dev
- Backend: FastAPI (Python) or Node.js (TypeScript)
- DB: SQLite local, Postgres on server
- Auth: OAuth + tokens; optional passphrase-encrypted local storage
- Infra: Docker, Github Actions, Sentry, Postgres RDS (if cloud)

## Security & Privacy

- Encrypt sensitive data at rest (device) and in transit (TLS).
- Offer local-first mode with optional encrypted cloud backup.
- Minimize data sent to servers; anonymize analytics.
- Secure CI secrets and rotate keys regularly.

## UX / Flows (high-level)

- Onboarding: choose local vs. cloud, set monthly income and bills.
- Transaction flow: auto-categorize + review suggestions.
- Budget flow: create category budgets, set alerts.
- Insights: weekly snapshot and actionable tips.

## Milestones & Timeline (rough)

- Week 0–1: Finalize spec, wireframes, tech decisions.
- Week 2–4: Repo + CI, auth, local storage, transaction model.
- Week 5–8: Budgeting engine, categorization (rules + baseline ML).
- Week 9–12: Visualizations, import/export, basic sync.
- Week 13–16: Integrations, hardening, beta testing, launch.

## Success Metrics

- Daily active users (DAU) and retention at 7/30 days.
- % transactions auto-categorized correctly.
- Goal completion rate and average time-to-goal.
- User satisfaction (NPS) from beta testers.

## Risks & Mitigations

- Banking integrations delays: provide strong CSV import and manual entry.
- Privacy concerns: default to local storage and clear privacy docs.
- ML accuracy: start with deterministic rules + human-in-loop correction.

## Next Steps

1. Review and refine priorities with stakeholders.
2. Produce wireframes for onboarding and transaction review.
3. Define MVP backlog (epics, stories) and begin repo setup.

---

Prepared as the project planning baseline. Update or request expansions for any section.
