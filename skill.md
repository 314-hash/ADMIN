---
name: supply-chain-email-triage
description: Ingests an incoming email related to supply chain disruptions, performs priority/urgency scoring, extracts business impacts and root causes, creates department-routed operational checklists, audits reply deliverability against 12 anti-spam rules, and constructs professional draft vendor responses for dispatch via Microsoft Graph sendMail.
parameters:
  email_sender: The sender email address.
  email_subject: The subject header of the message.
  email_body: The full textual body of the mail.
---

# Skill: Supply Chain Email Triage & Inbox Deliverability

Use this skill to automatically triage, prioritize, structure operational actions, and validate outgoing email deliverability for incoming supply chain incident signals.

---

## Execution Workflow

### 1. Information Extraction
- Parse `email_sender` to determine supplier, carrier, broker, or regulatory authority identity.
- Extract material parts, purchase orders (PO), shipment IDs, port terminals, container references, or geographic locations mentioned in the body.

---

### 2. Categorization
Assign the signal to one of the following domains:

| Category | Triggers |
| :--- | :--- |
| **Customs Delay** | Mismatched documentation, import checks, border holds, COO mismatches |
| **Inventory Shortage** | Supplier yield drops, raw material stockouts, production bottlenecks |
| **Transportation Disruption** | Port congestion, shipping delays, carrier breakdown, structural failures |
| **Compliance Risk** | Expired environmental certificates (REACH/RoHS), safety audits, regulatory locks |

---

### 3. Urgency & Priority Scoring
Determine **Priority** (Critical, High, Medium, Low) and compute **Urgency Score** (0–100):

| Risk Factor | Points |
| :--- | :--- |
| Production stop risk | +35 |
| Delivery delayed > 5 days | +25 |
| Contractual SLA penalty risk | +20 |
| Expired regulatory certificates | +15 |
| Executive / Compliance escalation | +5 |

---

### 4. Business Impact & Root Cause Formulation
- Synthesize a concise **Business Impact** statement outlining revenue at risk, assembly line exposure, or market risk.
- Identify the **Root Cause** of the physical, logistical, or paperwork bottleneck.

---

### 5. Operational Task Generation
Extract immediate tasks, defining for each:
- **Task Title**: Core action to take.
- **Owner Department**: Procurement, Logistics, Compliance, Customs, or Engineering.
- **Priority**: Match impact level.
- **Due Date Recommendation**: Based on safety-stock buffer exhaustion timeline.

---

### 6. Draft Response Composer
Formulate a professional, executive-ready Outlook draft reply:
- Keep tone concise, operationally focused, and action-oriented.
- Always include a named greeting (`Dear [Team/Name],`).
- Reference specific identifiers (shipment #, PO, invoice ref).
- Include formal sign-off (`Regards,` or `Best regards,`).
- Keep between 30–300 words.
- Never use casual expressions, slang, or marketing language.

---

### 7. Inbox Deliverability Audit
Before dispatching, validate the draft reply against all 12 anti-spam rules:

| Rule | Points | Pass Condition |
| :--- | :--- | :--- |
| No spam trigger words | 15 | Body contains none of: free, win, guaranteed, click here, act now, earn money, no cost, risk free, buy now, claim now, etc. |
| Clean subject line | 15 | Subject contains no: FREE, WIN, URGENT, !!!, ??? |
| No excessive ALL CAPS | 8 | Max 2 all-caps words (length > 3) in body |
| No excess punctuation | 8 | No !!!, ???, or $$$ patterns |
| Professional greeting | 8 | Body starts with: Dear, Hello, Hi, Greetings, Good morning/afternoon |
| Formal sign-off | 8 | Contains: Regards, Sincerely, Best wishes, Thank you, Kind regards |
| Optimal length | 10 | 30–300 words |
| No unsubscribe language | 8 | No: unsubscribe, opt out, remove me from, stop receiving |
| Personalized content | 8 | Contains order #, shipment, invoice, ref, contract, part, PO, quote, lot, or batch |
| No suspicious URLs | 6 | No bit.ly, tinyurl, goo.gl, t.co, ow.ly links |
| Text content present | 6 | At least 15 words |
| Professional tone | 10 | No slang: lol, omg, wanna, gonna, pls, btw, fyi, u r |

**Minimum required score before dispatch: 90% (inbox-safe)**

If score < 90%, identify failing rules and provide specific correction instructions before allowing dispatch.

---

## Output Schema

```json
{
  "category": "Customs Delay | Inventory Shortage | Transportation Disruption | Compliance Risk",
  "priority": "critical | high | medium | low",
  "urgency_score": 0-100,
  "business_impact": "string",
  "root_cause": "string",
  "actions": [
    { "text": "string", "checked": false }
  ],
  "tasks": [
    { "title": "string", "owner": "string", "priority": "string", "dueDate": "YYYY-MM-DD" }
  ],
  "draft_reply": "string",
  "deliverability_score": 0-100,
  "deliverability_failures": ["rule_id", "..."]
}
```
