const profile = {
  name: "Mark Joseph Valenzuela",

  headline: [
    "System Administrator",
    "Technical Support Specialist",
    "Workflow Automation (n8n)",
    "Network Infrastructure",
  ],

  location: "Quezon City, Philippines",

  shortDescription:
    "Enterprise IT professional specializing in System Administration, Technical Support, Network Infrastructure, and Workflow Automation. Experienced in Windows Server, VMware, Active Directory, FortiGate, TrueNAS, Synology, and n8n automation with OpenAI and Telegram integrations.",

  quickSkills: [
    "VMware",
    "Windows Server",
    "FortiGate",
    "n8n",
    "Networking",
    "Active Directory",
  ],

  social: {
    github: "https://github.com/markvalenzuela23",
    linkedin:
      "https://www.linkedin.com/in/mark-joseph-valenzuela-66b4b9314",
    email: "mark.valenzuela1023@gmail.com",
    onlinejobs: "https://v2.onlinejobs.ph/jobseekers/info/4550304",
  },

  // Resolved against Vite's base path so the link works both on the dev
  // server and under the /markjoseph-portfolio/ subpath on GitHub Pages.
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,

  buttons: {
    projects: "View Projects",
    resume: "Download Resume",
  },
};

export default profile;