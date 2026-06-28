# Signal Console — Supply Chain AI Operations Command Center

The **Signal Console** is a premium, production-ready real-time dashboard for Supply Chain Operations Administrators. It integrates Microsoft 365 Outlook with an AI parsing pipeline to automate incident triage, urgency scoring, task dispatch, email drafting, deliverability analysis, and knowledge capture.

---

## Features

| Feature | Description |
| :--- | :--- |
| **Inbox Triage Engine** | Scrollable signal inbox with AI-categorized emails (customs holds, fab yield drops, port crane failures, REACH violations) |
| **AI Processing Pipeline** | Animated 5-step visual tracker: Ingest → Parse → Scoring → Drafting → Ready |
| **Urgency Command Cockpit** | Live SVG circular urgency meter (0–100), business impact, root cause, and action checklists |
| **Inbox Deliverability Checker** | Real-time 12-rule anti-spam audit of every reply draft — live score bar, pass/fail checklist, and fix tips |
| **Outlook Draft Composer** | AI-generated vendor reply templates sent via Microsoft Graph sendMail |
| **Knowledge Article Compiler** | Auto-builds structured troubleshooting guides when a signal is resolved |
| **OneDrive Attachment Gateway** | Upload email attachments directly to OneDrive via Graph API |
| **Risk Radar Panel** | Dynamic counts for Supplier Risks, Inventory Shortages, Transit Delays, and Compliance Hazards |
| **Custom Email Simulator** | Inject custom signals through a local NLP rule parser without live M365 connection |
| **Offline Simulator Mode** | Full dashboard access without any Microsoft 365 login required |

---

## What's New

### Inbox Deliverability Checker (Anti-Spam Engine)
Scores every email draft across **12 weighted anti-spam rules** in real-time:
- No spam trigger words (free, guaranteed, win, click here, act now, etc.)
- Clean subject line (no !!!, ???, FREE, WIN)
- No excessive ALL CAPS
- Professional greeting (Dear, Hello, Hi)
- Formal sign-off (Regards, Sincerely, Thank you)
- Optimal word count (30–300 words)
- No unsubscribe / opt-out language
- Personalized content (order #, shipment IDs, invoice refs)
- No shortened URLs (bit.ly, tinyurl, goo.gl)
- Readable text content present (not image-only)
- Professional business tone (no slang)
- Score color-coded: <50% High Risk, 50–74% Moderate, 75–89% Near-Safe, 90–100% Inbox-Safe

### JWT IDX14100 Fix
- isValidToken() now validates JWT dot-segment format (2 dots for JWS, 4 for JWE)
- getGraphClient() has a second-layer guard that auto-purges malformed tokens from localStorage

---

## File Structure

| File | Purpose |
| :--- | :--- |
| index.html | Semantic HTML layout, pipeline visualizer, deliverability panel, modals |
| styles.css | Vanilla CSS design system, glassmorphism, neon priority indicators |
| app.js | Triage engine, NLP parser, M365 OAuth PKCE, Graph API, anti-spam checker |
| graph-js-sdk.js | Microsoft Graph JavaScript SDK (local bundle) |
| readme.md | This file — feature overview and quick-start guide |
| user_guide.md | Full step-by-step M365 Azure App Registration and connection guide |
| user.md | Operator persona profile and KPIs |
| pitch.md | Business case and ROI summary |
| skill.md | AI triage skill specification and scoring rules |
| vercel.json | Vercel deployment configuration |

---

## Quick Start — Running Locally

The app uses pure HTML/CSS/JS — no build step required.

```bash
python -m http.server 8000
```

Open: http://localhost:8000/index.html

Always use http://localhost:8000 — NOT file://. OAuth redirects require an HTTP origin.

---

## Connecting Microsoft 365 Outlook

See user_guide.md for the full Azure App Registration walkthrough.

Quick summary:
1. Register an app at portal.azure.com → Entra ID → App Registrations
2. Set Redirect URI → Single-page application (SPA) → http://localhost:8000/index.html
3. Add Graph permissions: User.Read, Mail.Read, Mail.Send, Files.ReadWrite, offline_access
4. Copy your Client ID → paste into Signal Console login screen → Sign In with Microsoft Outlook

---

## Production Architecture: Outlook Integration Flow

```
User Outlook Inbox
       ↓
Microsoft Graph Webhook (subscriptions)
       ↓
Signal Console Ingestion Webhook
       ↓
AI Triage Pipeline (NLP Parser)
       ↓
Urgency Scoring + Task Extraction + Draft Generation
       ↓
Inbox Deliverability Checker (Anti-Spam Audit)
       ↓
MS Graph sendMail API → Vendor Inbox
       ↓
Knowledge Article Auto-Generation
```
