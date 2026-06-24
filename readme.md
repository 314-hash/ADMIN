# Signal Console - Supply Chain AI Agent Command Center

The **Signal Console** is a premium, high-fidelity real-time simulation dashboard built for Supply Chain Operations Administrators. It showcases how a Microsoft 365 Outlook connection combined with an AI parsing pipeline automates incident triage, urgency scoring, task dispatch, and knowledge capturing.

## Features
* **Inbox Triage Simulator**: Scrollable left sidebar with preloaded supply chain emails (Rotterdam customs holds, Hsinchu fab yield drops, Port of LA crane failures, REACH violations).
* **Ingestion Webhook Form**: Trigger mock events by feeding custom email senders, subjects, and bodies into the AI parser.
* **AI Processing Pipeline**: Animated 5-step visual tracking representing email parsing, grading, drafting, and completion.
* **Command Cockpit**: Live SVG circular urgency meter, business impact metrics, root cause logs, and checkable action checklists.
* **Outlook Draft Composer**: Professional, operationally focused vendor response templates ready to be sent through the simulated Microsoft Graph `sendMail` API.
* **Knowledge Article Compiler**: Automatically builds structured troubleshooting guides and mitigation documents when a signal is resolved.
* **Risk Radar Panel**: Dynamic counts showing active Supplier Risks, Inventory Shortages, Transit bottlenecks, and Compliance Hazards.

## File Structure
- [index.html](file:///c:/Users/janla/Admin/index.html) - Structural semantic layouts and SVG components.
- [styles.css](file:///c:/Users/janla/Admin/styles.css) - Vanilla CSS design system, glassmorphism templates, and glowing neon priority indicators.
- [app.js](file:///c:/Users/janla/Admin/app.js) - Triage workflows, simulated NLP keywords parser, status updates, and DB engines.
- [user.md](file:///c:/Users/janla/Admin/user.md) - Operator target persona profile.
- [pitch.md](file:///c:/Users/janla/Admin/pitch.md) - Business case deck.
- [skill.md](file:///c:/Users/janla/Admin/skill.md) - Agentic pipeline automation skill guide.

## Installation & Running Locally
Since the console is built using pure web technologies (HTML/CSS/JS), it runs without heavy frameworks. 

To run:
1. Spin up a local server in this directory:
   ```bash
   python -m http.server 8000
   ```
2. Open the following URL in any browser:
   ```text
   http://localhost:8000/index.html
   ```

## Production Architecture: Outlook Integration Flow
To transition from the simulator to an enterprise production setup:
1. **App Registration**: Register your application in the **Microsoft Entra ID** portal.
2. **Assign Scopes**: Request permissions: `Mail.Read`, `Mail.Send`, `User.Read`, `offline_access`.
3. **OAuth 2.0 Flow**: Implement the authorization code flow to trade code for tokens at the Microsoft token endpoint (`https://login.microsoftonline.com/common/oauth2/v2.0/token`).
4. **Graph Subscriptions**: Establish a webhook listener to subscribe to changes in the inbox (`https://graph.microsoft.com/v1.0/subscriptions`).
5. **Triage Hook**: Map webhook events to your AI parsing pipeline, generating the task lists and draft replies, then post to Outlook via `https://graph.microsoft.com/v1.0/me/sendMail`.
