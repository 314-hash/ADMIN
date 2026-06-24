---
name: supply-chain-email-triage
description: Ingests an incoming email related to supply chain, performs priority/urgency scoring, extracts business impacts, creates checklists, and constructs draft vendor responses.
parameters:
  email_sender: The sender email address.
  email_subject: The subject header of the message.
  email_body: The full textual body of the mail.
---

# Skill: Supply Chain Email Triage

Use this skill to automatically triage, prioritize, and structure operational actions for incoming supply chain incidents.

## Execution Workflow

1. **Information Extraction**:
   - Parse `email_sender` to determine supplier/carrier identity.
   - Extract material parts, purchase orders (PO), shipment IDs, port terminals, or locations mentioned.

2. **Categorization**:
   Assign the signal to one of the following domains:
   - **Customs Delay**: Mismatched documentation, import checks, or border holds.
   - **Inventory Shortage**: Supplier yield drops, raw material stockouts, production bottlenecks.
   - **Transportation Disruption**: Port congestion, shipping delays, carrier breakdown, structural failures.
   - **Compliance Risk**: Expired environmental certificates (REACH/RoHS), safety audits, regulatory locks.

3. **Urgency & Priority Scoring**:
   - Determine **Priority** (Critical, High, Medium, Low).
   - Compute **Urgency Score** (0-100) using the following weight metrics:
     * Production stop risk = +35 points
     * Delivery delayed > 5 days = +25 points
     * Contractual SLA penalty risk = +20 points
     * Expired regulatory certificates = +15 points
     * Executive/Compliance escalation = +5 points

4. **Business Impact & Root Cause Formulation**:
   - Synthesize a concise **Business Impact** statement outlining revenue at risk.
   - Identify the **Root Cause** of the physical or paperwork bottleneck.

5. **Operational Task Generation**:
   Extract immediate tasks, defining:
   - **Task Title**: Core action to take.
   - **Owner Department**: Procurement, Logistics, Compliance, Customs, or Engineering.
   - **Priority**: Match impact level.
   - **Due Date Recommendation**: Safety stock buffer expiration buffer limit.

6. **Draft Response Composer**:
   - Formulate a professional, executive-ready Outlook draft reply.
   - Keep tone concise, operationally focused, and action-oriented. Never use overly casual expressions.
