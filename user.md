# User Profile: Supply Chain Operations Administrator (SignalOps AI)

This document profiles the target user persona, operational patterns, and responsibilities for the operator of the Signal Console.

## Persona Overview
* **Role Title**: Senior Supply Chain Operations Administrator / Email Triage Specialist
* **Focus**: Real-time disruption response, logistics coordination, supplier escalation, and procurement operations.
* **Workplace Context**: Inside a global manufacturing and distribution company's Supply Chain Command Center.
* **Inbound Volume**: Monitors hundreds of emails per day from carriers, brokers, port authorities, and regulatory inspectors.

## Core Responsibilities

1. **Email Triage & Analysis**:
   - Rapidly identify critical supplier delays, inventory shortages, port bottlenecks, customs holds, and compliance risks.
   - Extract key operational fields: sender, subject, delay length, material identifiers, and financial risk.

2. **Priority and Urgency Scoring**:
   - Assess urgency from **0 (Low)** to **100 (Critical)**.
   - Calculate score based on production stoppages, SLA breach penalties, customer delivery impact, and executive involvement.

3. **Operational Task Coordination**:
   - Break incoming emails into structured tasks.
   - Route tasks to internal departments (Procurement, Logistics, Engineering, Customs, Compliance).
   - Set due dates based on safety-stock buffer exhaustion timelines.

4. **Incident Resolution & Knowledge Transfer**:
   - Review and execute checklist actions.
   - Draft and dispatch professional Outlook replies using the Microsoft Graph API.
   - Convert resolved incidents into structured Knowledge Articles to prevent repeat disruptions.

## Key Performance Indicators (KPIs)
* **Mean Time to Triage (MTTT)**: Goal is under 5 minutes from email receipt.
* **Mean Time to Resolution (MTTR)**: Goal is under 4 hours for standard customs holds and routing diversions.
* **SLA Breaches avoided**: Minimize customer shipment delays.
* **Knowledge Reuse Rate**: Ratio of incidents mitigated using existing KB playbooks.
