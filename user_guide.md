# Signal Console — Microsoft 365 Outlook Connection Guide

This guide provides step-by-step instructions for supply chain administrators on how to register and connect the **Signal Console** to a live Microsoft 365 Outlook mailbox using the Microsoft Graph API and OAuth 2.0 PKCE flow.

---

## Prerequisites

Before beginning, ensure you have:
1. A Microsoft 365 account (corporate Work/School account, or personal `@outlook.com`, `@hotmail.com`, or `@live.com`).
2. Access to the **[Microsoft Entra admin center](https://entra.microsoft.com)** or the **[Azure Portal](https://portal.azure.com)**.
3. The app running locally via `python -m http.server 8000` at `http://localhost:8000/index.html`, or hosted on a public domain (e.g., Vercel).

> **Important**: Always access the app via `http://localhost:8000` — never by opening `index.html` directly as a `file://` URL. OAuth redirects will fail from file:// origins.

---

## Step 1: Register the Application in Entra ID

1. Sign in to the **[Microsoft Entra admin center](https://entra.microsoft.com)**.
2. Navigate: **Identity** > **Applications** > **App registrations** > **+ New registration**.
3. Configure:
   - **Name**: `Signal Console AI` (any descriptive name)
   - **Supported account types**: Select the third option —
     *"Accounts in any organizational directory (Any Microsoft Entra ID tenant — Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)"*
   - **Redirect URI**: Select **Single-page application (SPA)** and enter:
     - Local: `http://localhost:8000/index.html`
     - Production: `https://your-project.vercel.app/index.html`
4. Click **Register**.

---

## Step 2: Retrieve Client Credentials

On the application Overview page, copy:
- **Application (client) ID** — e.g., `00000000-0000-0000-0000-000000000000`

- **Directory (tenant) ID** — or simply use `common` for multi-tenant / personal accounts

---

## Step 3: Configure API Permissions (Scopes)

1. In the left menu, click **API permissions**.
2. Remove any non-Graph permissions (Azure Service Management, Directory.ReadWrite.All, etc.).
3. Click **+ Add a permission** > **Microsoft Graph** > **Delegated permissions**.
4. Search and select these 7 permissions:

| Permission | Purpose |
| :--- | :--- |
| `openid` | Sign users in |
| `profile` | View basic user profile |
| `email` | View user email address |
| `offline_access` | Maintain access via refresh tokens |
| `Mail.Read` | Read user mailboxes |
| `Mail.Send` | Send email as the user |
| `Files.ReadWrite` | Upload attachments to OneDrive |

5. Click **Add permissions**.

---

## Step 4: Validate the App Manifest

To ensure personal Microsoft accounts work correctly:

1. Click **Manifest** in the left menu.
2. Verify:
   - `"signInAudience"` is `"AzureADandPersonalMicrosoftAccount"`
   - `"requestedAccessTokenVersion"` inside the `"api"` block is `2`
   - The redirect URI is in the `"spa"` block (not `"publicClient"`)
3. Click **Save** if any edits were made.

---

## Step 5: Connect Signal Console

1. Open `http://localhost:8000/index.html` in your browser.
2. The **Sign-in splash screen** will appear automatically.
3. Enter your **Client ID** (from Step 2).
4. Leave **Tenant ID** as `common` (or enter your org's Tenant ID).
5. Click **Sign In with Microsoft Outlook**.
6. Complete Microsoft login and accept the permissions consent screen.
7. You'll be redirected back — the status badge turns green: **Connected**.

---

## Step 6: Sync Your Inbox

Once connected:
- Click **Sync Inbox** in the M365 Integration panel (left sidebar).
- Signal Console fetches your latest 5 Outlook messages.
- Each email is parsed, categorized, urgency-scored, and loaded into the triage pipeline.

---

## Inbox Deliverability Checker — Ensuring Replies Land in Direct Inbox

Every reply draft is automatically audited by the **Inbox Deliverability Checker** before sending. It scores the email across 12 anti-spam rules:

| Rule | Points | What It Checks |
| :--- | :--- | :--- |
| No spam trigger words | 15 | Blocks: free, win, guaranteed, click here, act now, earn money, etc. |
| Clean subject line | 15 | Flags: FREE, WIN, URGENT, !!!, ??? in subject |
| No excessive ALL CAPS | 8 | Max 2 fully capitalised words |
| No excess punctuation | 8 | Rejects !!!, ???, $$$ patterns |
| Professional greeting | 8 | Must start with Dear, Hello, Hi, Greetings |
| Formal sign-off | 8 | Must contain Regards, Sincerely, Thank you |
| Optimal length 30–300 words | 10 | Short or very long emails trigger spam heuristics |
| No unsubscribe language | 8 | Blocks: unsubscribe, opt out, remove me |
| Personalized content | 8 | References order #, shipment IDs, invoice refs |
| No suspicious URLs | 6 | Blocks bit.ly, tinyurl, goo.gl links |
| Text content present | 6 | Not image-only (at least 15 words) |
| Professional tone | 10 | Blocks slang: lol, omg, pls, wanna, btw |

**Score thresholds:**
- `< 50%` — High spam risk (red)
- `50–74%` — Moderate risk (orange)
- `75–89%` — Near inbox-safe (yellow)
- `90–100%` — Inbox-safe (green)

---

## Troubleshooting

| Error | Fix |
| :--- | :--- |
| `IDX14100: JWT is not well formed` | Clear localStorage: DevTools → Application → Local Storage → delete `m365_access_token`. The app will auto-detect and purge malformed tokens. Reconnect to get a fresh JWT. |
| `unauthorized_client: does not exist or is not enabled for consumers` | Set **Supported account types** to include Personal Microsoft Accounts. Set `"requestedAccessTokenVersion": 2` in the manifest. |
| `The requested scope is not yet available for the audience` | Remove all non-Graph permissions from API Permissions. Keep only the 7 listed in Step 3. |
| `AADSTS50011: Redirect URI mismatch` | Ensure the URL in your browser exactly matches the Redirect URI registered in the Portal under Single-page application (SPA). |
| `CORS/Network error during token exchange` | Token exchange requires an HTTP server. Run `python -m http.server 8000` and use `http://localhost:8000`. |
| Redirected back but still shows Disconnected | Ensure you are on `http://` not `file://`. Check browser console for additional error details. |

---

## Offline / Simulator Mode

If you do not have Azure access, or want to evaluate the platform without logging in:

1. On the splash screen, click **Launch Offline Simulator Sandbox**.
2. All dashboard features are available with preloaded supply chain emails.
3. The Inbox Deliverability Checker, AI pipeline, and Knowledge Base all work in simulator mode.
