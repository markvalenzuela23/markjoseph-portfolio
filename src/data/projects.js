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
  "Designed and developed an AI-powered customer support chatbot for a pisonet shop — a Philippine coin-operated internet and gaming kiosk — using n8n and Google Gemini. The chatbot integrates with Facebook Messenger, retrieves business information from a Google Docs knowledge base, automatically detects the customer's language, answers pricing and frequently asked questions, and provides instant 24/7 support without human intervention.",

    metrics: [
  {
    value: "24/7",
    label: "AI Customer Support",
  },
  {
    value: "Multi-Language",
    label: "English & Filipino",
  },
],

    technologies: [
  "n8n",
  "Google Gemini",
  "Facebook Messenger",
  "AI Agent",
  "Google Docs",
  "Knowledge Base",
  "Webhook",
  "HTTP Requests",
  "JSON",
  "Prompt Engineering",
],

    achievements: [
  "Designed an AI-powered customer support workflow",
  "Integrated Facebook Messenger with n8n",
  "Built a Google Docs knowledge base",
  "Implemented automatic language detection",
  "Engineered context-aware AI prompts",
  "Automated customer FAQs and pricing inquiries",
  "Reduced manual customer support workload",
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
      "Built an end-to-end workflow automation for a reseller of GCash, the Philippines' largest mobile wallet. The n8n workflow validates licenses, accepts Telegram image uploads, extracts GPS coordinates through OCR, converts them into readable addresses using AI, logs transactions into Google Sheets, and sends automated confirmations.",

    metrics: [
  {
    value: "End-to-End",
    label: "Workflow Automation",
  },
  {
    value: "OCR + AI",
    label: "Address Extraction",
  },
],

    technologies: [
      "n8n",
      "OpenAI API",
      "Telegram Bot API",
      "Google Sheets",
      "OCR",
      "HTTP Requests",
      "Webhooks",
      "JSON",
    ],

    achievements: [
      "License validation",
      "Telegram Bot automation",
      "OCR processing",
      "GPS coordinate extraction",
      "Address conversion using AI",
      "Automatic Google Sheets logging",
      "Automated confirmations",
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
      "Developed an automation workflow that validates licenses, records transactions, stores data in Google Sheets, and provides automated Telegram confirmations.",

    technologies: [
      "n8n",
      "Telegram Bot API",
      "Google Sheets",
      "HTTP Requests",
      "JSON",
    ],

    achievements: [
      "License validation",
      "Telegram automation",
      "Google Sheets logging",
      "Automated confirmations",
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