const experience = [
  {
    id: 1,

    company: "Super Grocers Inc.",

    position: "IT Assistant",

    duration: "October 2019 – October 2020",

    description:
      "Provided technical support for hardware, software, and network infrastructure while ensuring reliable day-to-day IT operations across company workstations and office equipment.",

    achievements: [
      "Installed and configured desktops, printers and peripherals",
      "Troubleshot hardware, software and network issues",
      "Performed preventive maintenance",
      "Installed Windows and business applications",
      "Configured employee workstations",
      "Removed malware and optimized computer performance",
    ],
  },

  {
    id: 2,

    company: "Woodfields Consultants, Inc.",

    position: "System Administrator",

    duration: "June 2023 – February 2026",

    description:
      "Managed enterprise Windows Server infrastructure, VMware virtualization, Active Directory, backup systems, NAS storage, firewalls, and enterprise networking for business operations.",

    achievements: [
      "Administered VMware ESXi virtual machines",
      "Managed Windows Server & Active Directory",
      "Configured Synology & TrueNAS Storage",
      "Implemented Veeam Backup & Recovery",
      "Maintained FortiGate Firewalls",
      "Managed DNS, DHCP and Group Policy",
      "Provided enterprise technical support",
    ],
  },

  {
    id: 3,

    company: "St. Catherine De Novaliches School, Inc.",

    position: "IT Infrastructure Consultant",

    duration: "2026 – Present · On-call",

    description:
      "Designed, implemented and currently maintain the school's complete network infrastructure supporting administrators, faculty and students.",

    achievements: [
      "Designed complete network topology",
      "Implemented Dual ISP Redundancy",
      "Configured Load Balancer",
      "Installed Access Points",
      "Designed Structured Cabling Routes",
      "Configured Network Switches",
      "Provides ongoing IT Support",
    ],
  },

  {
    id: 4,

    company: "Mr. Freeze Ice Plant",

    position: "IT Consultant",

    duration: "2026 – Present · On-call",

    description:
      "Provides on-call technical support, computer maintenance, and network administration for business operations.",

    achievements: [
      "Computer Maintenance",
      "Network Troubleshooting",
      "Printer Support",
      "Windows Administration",
      "System Upgrades",
      "Remote Technical Support",
    ],
  },

  {
    id: 5,

    company: "Private Clients",

    position: "Workflow Automation Engineer",

    duration: "2026 – Present",

    description:
      "Developed intelligent workflow automation systems using n8n integrated with Telegram, Facebook Messenger, OCR, LLM agents and Google Workspace to automate business processes.",

    achievements: [
      "Built GCash Buy Load Automation",
      "Telegram Bot Integration",
      "OCR Image Processing",
      "LangChain Agent Integration",
      "Google Sheets Automation",
      "License Validation System",
    ],
  },

  {
    id: 6,

    company: "Homexa",

    position: "Technical Virtual Assistant — Product Development",

    duration: "August – September 2026",

    description:
      "Worked on Yapii, the company's AI-powered SaaS platform for real estate agents (Node.js, PostgreSQL, React). Delivered a transaction management module by directing Claude Code sessions in parallel, then migrated the platform off Render onto a self-provisioned Hostinger KVM 8 VPS running Dokploy, with zero downtime.",

    achievements: [
      "Rebuilt transaction management to match the incumbent tool",
      "Built a transaction trigger and automation engine",
      "Directed 6 parallel Claude Code sessions to delivery",
      "Added 101 tests to previously untestable code",
      "Traced 236 test failures to ~5 root causes",
      "Provisioned a Hostinger KVM 8 VPS running Dokploy",
      "Migrated off Render with zero downtime, saving ~$1,860/year",
      "Hardened destructive write paths against external systems",
    ],
  },
];

export default experience;