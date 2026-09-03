# Published n8n workflows

Sanitised workflow exports live in this folder and are served at
`https://markvalenzuela23.github.io/markjoseph-portfolio/workflows/<file>.json`.

A project links to its export by adding a `workflowFile` field in
`src/data/projects.js`:

```js
{
  id: 2,
  title: "GCash Buy Load Automation",
  workflowFile: "gcash-buy-load.json",
  // ...
}
```

The "View workflow JSON" and "Download" buttons only render for projects that
declare one, so adding a file is the only step needed.

## Exporting from n8n

Open the workflow → **⋯** menu (top right) → **Download**. That produces a
`.json` file containing the whole workflow.

## Sanitise before committing

**An n8n export can contain live secrets.** Anything committed here is public
and permanent — it stays in git history even if deleted later. Check every one
of these before adding a file:

- [ ] **Credentials** — the export references credentials by `id` and `name`.
      The secret values are not included, but the names can leak client
      identities. Rename them to something generic.
- [ ] **Webhook URLs and IDs** — `webhookId` and any production webhook URL.
      Replace with a placeholder; a live webhook URL is an open endpoint.
- [ ] **API keys in node parameters** — anything pasted directly into an HTTP
      Request node's header, query, or body rather than stored as a credential.
      This is the most common leak.
- [ ] **Google Sheet / Doc IDs** — a document ID is enough to attempt access.
- [ ] **Chat IDs and phone numbers** — Telegram chat IDs, recipient numbers.
- [ ] **Client names** — in node names, sticky notes, and default values.
- [ ] **Real data in pinned node output** — n8n saves pinned sample data in the
      export, and it is easy to forget it is there.

A quick way to review before committing:

```bash
grep -iE 'apikey|api_key|token|secret|bearer|password|webhookid|https?://' public/workflows/your-file.json
```

Read every line it returns. If in doubt, replace the value with
`"REDACTED"` — the workflow is being published to show structure and logic,
not to be run as-is.
