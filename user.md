# User Profile: Supply Chain Operations Administrator (SignalOps AI)

This document profiles the target user persona, operational patterns, and responsibilities for the operator of the Signal Console.

---

## Persona Overview

| Field | Detail |
| :--- | :--- |
| **Role Title** | Senior Supply Chain Operations Administrator / Email Triage Specialist |
| **Focus** | Real-time disruption response, logistics coordination, supplier escalation, procurement operations |
| **Workplace** | Global manufacturing and distribution company's Supply Chain Command Center |
| **Inbound Volume** | Hundreds of emails per day from carriers, brokers, port authorities, and regulatory inspectors |
| **Tools Used** | Signal Console, Microsoft 365 Outlook, SAP/Oracle ERP, TMS platforms |

---

## Core Responsibilities

### 1. Email Triage & Analysis
- Rapidly identify critical supplier delays, inventory shortages, port bottlenecks, customs holds, and compliance risks.
- Extract key operational fields: sender identity, subject, delay duration, material identifiers, and financial risk.
- Trigger the 5-step AI processing pipeline for each incoming signal.

### 2. Priority and Urgency Scoring
- Assess urgency from **0 (Low)** to **100 (Critical)**.
- Score based on: production stoppages, SLA breach penalties, customer delivery impact, and executive escalation.
- Use Signal Console urgency gauge to prioritize work queue order.

### 3. Operational Task Coordination
- Break incoming emails into structured, routable tasks.
- Route tasks to internal departments: Procurement, Logistics, Engineering, Customs, Compliance.
- Set due dates based on safety-stock buffer exhaustion timelines.

### 4. Email Reply & Deliverability Management
- Review AI-generated draft replies for accuracy and tone.
- Use the **Inbox Deliverability Checker** before sending to ensure replies land in the vendor's **direct inbox** (not spam).
- Verify deliverability score is 90%+ before clicking **Approve & Send Mail**.
- Send approved replies via Microsoft Graph `sendMail` API.

### 5. Incident Resolution & Knowledge Transfer
- Execute checklist action items in the Command Cockpit.
- Mark signals as Resolved once all actions are complete.
- Review auto-generated Knowledge Articles — edit and validate before publishing to the team database.

---

## Key Performance Indicators (KPIs)

| KPI | Target |
| :--- | :--- |
| **Mean Time to Triage (MTTT)** | < 5 minutes from email receipt |
| **Mean Time to Resolution (MTTR)** | < 4 hours for standard customs holds and routing diversions |
| **SLA Breaches Avoided** | Minimize customer shipment delays to < 2 per quarter |
| **Deliverability Score** | All outgoing replies must score 90%+ before dispatch |
| **Knowledge Reuse Rate** | Ratio of incidents mitigated using existing KB playbooks |
| **Inbox Spam Rate** | Zero vendor replies landing in spam — enforced by Deliverability Checker |

---

## Anti-Spam Best Practices for Outgoing Replies

To ensure vendor replies land in the **direct inbox**, the operator must follow these rules (enforced by the Deliverability Checker):

- **Start with a named greeting**: `Dear [Name],` or `Dear [Company] Team,`
- **Reference specific identifiers**: Always include shipment #, PO number, invoice ref, or part number
- **Keep word count between 30–300 words**: Optimal length signals legitimate business email
- **Use a formal sign-off**: `Regards,`, `Best regards,`, `Sincerely,`, `Thank you,`
- **Avoid spam trigger words**: free, guaranteed, click here, act now, special offer, no cost
- **No ALL CAPS words**: Maximum 2 all-caps words in the entire email body
- **No shortened URLs**: Use full URLs or Graph-linked attachments only
- **No !!! or ???**: Single punctuation marks only
- **Professional tone throughout**: No slang (lol, pls, wanna, btw, fyi)
- **Never include unsubscribe language**: This flags your email as bulk/marketing
- **Use plain text or clean HTML**: Avoid image-heavy or template-heavy formats
- **Send from a verified domain**: Ensure your M365 sender domain has SPF, DKIM, and DMARC configured

---

## Escalation Matrix

| Signal Priority | Urgency Score | Response Owner | Escalation Time |
| :--- | :--- | :--- | :--- |
| Critical | 90–100 | VP Operations + Procurement Lead | Immediate (<15 min) |
| High | 75–89 | Senior Operations Administrator | <1 hour |
| Medium | 50–74 | Operations Administrator | <4 hours |
| Low | 0–49 | Logistics Coordinator | <24 hours |
