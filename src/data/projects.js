const projects = [
  {
    id: 6,

    featured: true,

    title: "Transaction Management Module — Yapii",

    client: "Homexa · Yapii (AI real estate SaaS)",

    role: "AI-Assisted Development · Product Delivery",

    description:
      "Rebuilt a brokerage's transaction management inside Yapii, their AI SaaS platform, to replace the third-party tool they were paying for. Delivered task management, a trigger-based automation engine, reporting dashboards, and inbound email-to-listing matching — built by directing six Claude Code sessions running in parallel, each in an isolated git worktree and scratch database, coordinated into a single reviewable pull request.",

    metrics: [
      {
        value: "6",
        label: "Parallel Claude Code sessions",
      },
      {
        value: "101",
        label: "Tests added to untested code",
      },
    ],

    technologies: [
      "Claude Code",
      "AI Coding Agents",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "React",
      "Vite",
      "Tailwind CSS",
      "Git Worktrees",
      "Docker Swarm",
    ],

    achievements: [
      "Rebuilt task management to feature parity",
      "Built a transaction trigger and automation engine",
      "Automated intake from live web forms",
      "Matched inbound email to the correct listing",
      "Added 101 tests to previously untestable code",
      "Traced 236 test failures to ~5 root causes",
      "Enforced read-only access to external systems",
      "Ran the full suite after every merge, shipped as one PR",
    ],

    images: [],
  },

  {
    id: 7,

    featured: true,

    title: "Platform Migration — Render to Self-Hosted VPS with Dokploy",

    client: "Homexa · Yapii (AI real estate SaaS)",

    role: "Infrastructure Engineer",

    description:
      "Moved a production SaaS platform off Render onto a self-managed Hostinger KVM 8 VPS, cutting hosting cost by roughly 86% with zero downtime. Provisioned the server from scratch and stood up Dokploy — a self-hosted, Docker-based PaaS — as the Render replacement, so the team kept push-to-deploy without the managed-host bill. Evaluated managed Postgres and rejected it on cost, containerised a build that had never successfully run, and rehearsed the full database cutover before repointing the domain.",

    metrics: [
      {
        value: "~$1,860",
        label: "Saved per year on hosting",
      },
      {
        value: "Zero",
        label: "Downtime during cutover",
      },
    ],

    technologies: [
      "Dokploy",
      "Hostinger KVM 8",
      "Docker Swarm",
      "PostgreSQL",
      "Linux VPS",
      "pg_dump",
      "rclone",
      "DNS / DMARC",
      "Node.js",
    ],

    achievements: [
      "Provisioned a Hostinger KVM 8 VPS from scratch",
      "Deployed Dokploy as a self-hosted Render alternative",
      "Cut hosting from $181 to $25.64 per month",
      "Completed cutover with zero downtime",
      "Rehearsed a 7.2 GB restore down to 51 seconds",
      "Fixed a Dockerfile that had never built successfully",
      "Ended recurring hourly crashes by raising the heap limit",
      "Replaced a paid backup add-on with scripted offsite dumps",
      "Corrected DMARC, CNAME and email reply-path faults",
      "Verified workspace data isolation end to end",
    ],

    images: [],
  },

  {
    id: 1,

    featured: true,

    title: "AI Customer Support Chatbot for Pisonet Business",

    client: "Ji Eun's Hideout Pisonet & Computer Shop",

    role: "AI Automation Engineer",

    description:
  "Designed and developed an AI-powered customer support chatbot for a pisonet shop — a Philippine coin-operated internet and gaming kiosk — using n8n's LangChain agent with an OpenRouter model. It handles the Messenger webhook verification handshake, pulls business information from a Google Docs knowledge base, keeps conversation context in a window buffer memory, detects whether the customer is writing English or Filipino, and is constrained by prompt to answer only from the knowledge base rather than inventing prices or promos.",

    metrics: [
  {
    value: "24/7",
    label: "Unattended customer support",
  },
  {
    value: "EN / FIL",
    label: "Automatic language detection",
  },
],

    technologies: [
  "n8n",
  "LangChain AI Agent",
  "OpenRouter",
  "Facebook Graph API",
  "Google Docs",
  "Window Buffer Memory",
  "Webhook Verification",
  "Prompt Engineering",
],

    achievements: [
  "Handled the Messenger webhook verification handshake",
  "Routed verification and message traffic down separate branches",
  "Built a Google Docs knowledge base as the single source of truth",
  "Constrained the agent to refuse rather than invent prices or promos",
  "Automatic English / Filipino language detection",
  "Window buffer memory for follow-up questions in a conversation",
  "Filtered non-text events before they reach the model",
  "Automated customer FAQs and pricing enquiries",
],

    images: [
      "chatbot-workflow",
      "chatbot-facebook",
      "chatbot-conversation",
    ],
  },

  {
    id: 2,

    featured: true,

    title: "GCash Buy Load Automation",

    client: "Private Client",

    role: "Workflow Automation Engineer",

    description:
      "Built an end-to-end workflow automation for a reseller of GCash, the Philippines' largest mobile wallet. A Telegram bot gates access behind a licence-code login bound to one chat ID, OCRs the coordinates stamped on each installation photo, checks they fall inside the Philippines, reverse-geocodes them through OpenStreetMap, and refuses the submission when the detected location contradicts the city the installer typed. Valid entries are filed to Google Drive and appended to Google Sheets with a confirmation back to the installer.",

    metrics: [
  {
    value: "3 layers",
    label: "Licence, geofence and city-match checks",
  },
  {
    value: "OCR + Geo",
    label: "Location verified, not just recorded",
  },
],

    technologies: [
      "n8n",
      "Telegram Bot API",
      "OCR.space API",
      "Nominatim / OpenStreetMap",
      "Google Sheets",
      "Google Drive",
      "JavaScript (Code nodes)",
      "Geofencing",
    ],

    achievements: [
      "Licence login bound to a single Telegram chat ID",
      "Three-sheet authorisation model with per-run audit logging",
      "OCR of coordinates stamped on installation photos",
      "Bounding-box check that coordinates fall inside the Philippines",
      "Reverse geocoding via OpenStreetMap to confirm the city",
      "Rejects submissions where location contradicts the typed city",
      "City alias table normalising ~100 spellings and abbreviations",
      "Proof filed to Drive, row appended to Sheets, result sent back",
    ],

    images: [
      "workflow",
      "telegram",
      "sheet",
    ],
  },

  {
    id: 3,

    featured: false,

    title: "GCash Summer Nano Automation",

    client: "Private Client",

    role: "Workflow Automation Engineer",

    description:
      "A Telegram reporting bot for GCash field teams. It parses free-text captions into 20+ structured fields, normalising messy human input — merchant area inferred from city against a national lookup, transaction types and freebie names mapped from dozens of spelling variants. Parsed entries are held in workflow state and shown back to the submitter for an APPROVE reply before anything is written, so bad extractions are caught by a human rather than filed.",

    technologies: [
      "n8n",
      "Telegram Bot API",
      "Google Sheets",
      "Google Drive",
      "JavaScript (Code nodes)",
      "Workflow State",
      "Regex Parsing",
    ],

    achievements: [
      "Caption parser extracting 20+ fields from free text",
      "Human-in-the-loop approval before any write",
      "Merchant area inferred from city across all PH regions",
      "Fuzzy normalisation of transaction types and freebie names",
      "Multi-transaction entries handled in one submission",
      "Licence login and authorisation shared with the Buy Load bot",
    ],

    images: [
      "workflow",
      "telegram",
      "sheet",
    ],
  },

  {
    id: 4,

    featured: false,

    title: "School Network Infrastructure",

    client: "St. Catherine De Novaliches School, Inc.",

    role: "Network Infrastructure Engineer",

    description:
      "Designed and deployed the school's network infrastructure by planning cable routes, implementing a dual ISP setup with load balancing, installing structured cabling, unmanaged switches, and wireless access points. Currently provides ongoing maintenance and technical support.",

    technologies: [
      "Dual ISP",
      "Load Balancing",
      "Structured Cabling",
      "Unmanaged Switches",
      "Wireless Access Points",
      "Network Troubleshooting",
    ],

    achievements: [
      "Planned network infrastructure",
      "Designed cable routes",
      "Implemented Dual ISP",
      "Configured Load Balancing",
      "Installed Structured Cabling",
      "Installed Unmanaged Switches",
      "Deployed Access Points",
      "Ongoing IT Maintenance",
    ],

    images: [],
  },

  {
    id: 5,

    featured: false,

    title: "Enterprise System Administration",

    client: "Woodfields Consultants, Inc.",

    role: "System Administrator",

    description:
      "Managed enterprise infrastructure including Windows Servers, VMware virtualization, Active Directory, TrueNAS, Synology storage, backup systems, and server maintenance.",

    technologies: [
      "Windows Server",
      "VMware ESXi",
      "Active Directory",
      "TrueNAS",
      "Synology",
      "Veeam Backup",
    ],

    achievements: [
      "Server Administration",
      "Virtualization",
      "Backup & Recovery",
      "Storage Management",
      "Active Directory",
      "System Monitoring",
    ],

    images: [],
  },
];

export default projects;