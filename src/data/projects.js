const projects = [
  {
    id: 1,

    featured: true,

    title: "AI Customer Support Chatbot for Pisonet Business",

    client: "Ji Eun's Hideout Pisonet & Computer Shop",

    role: "AI Automation Engineer",

    description:
  "Designed and developed an AI-powered customer support chatbot using n8n and Google Gemini. The chatbot integrates with Facebook Messenger, retrieves business information from a Google Docs knowledge base, automatically detects the customer's language, answers pricing and frequently asked questions, and provides instant 24/7 support without human intervention.",

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
      "Built an end-to-end workflow automation using n8n that validates licenses, accepts Telegram image uploads, extracts GPS coordinates through OCR, converts them into readable addresses using AI, logs transactions into Google Sheets, and sends automated confirmations.",

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