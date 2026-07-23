const projects = [
  {
    id: 1,
    featured: true,

    title: "GCash Buy Load Automation",

    client: "Private Client",

    role: "Workflow Automation Engineer",

    description:
      "Built an end-to-end workflow automation using n8n that validates licenses, accepts Telegram image uploads, extracts GPS coordinates through OCR, converts them into readable addresses using AI, logs transactions into Google Sheets, and sends automated confirmations.",

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
    id: 2,

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
    id: 3,

    featured: false,

    title: "School Network Infrastructure",

    client: "St. Catherine De Novaliches School, Inc.",

    role: "Network Infrastructure Engineer",

    description:
      "Designed and deployed the school's network infrastructure by planning cable routes, implementing a dual ISP setup with load balancing, installing structured cabling, unmanaged switches, and wireless access points. Continue providing ongoing maintenance and technical support.",

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
    id: 4,

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