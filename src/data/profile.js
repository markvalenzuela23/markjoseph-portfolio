const profile = {
  name: "Mark Joseph Valenzuela",

  headline: [
    "AI Automation Engineer",
    "AI-Assisted Developer",
    "n8n + LLM Workflows",
    "System Administrator",
  ],

  location: "Quezon City, Philippines",

  shortDescription:
    "I build AI automations and ship software by directing Claude Code. n8n workflows wired into LLMs, Telegram and Messenger for live businesses — and a production SaaS module delivered by coordinating six parallel Claude Code sessions. I run what I build too: I moved that platform off Render onto a self-provisioned VPS running Dokploy, with zero downtime.",

  quickSkills: [
    "n8n",
    "OpenAI API",
    "Google Gemini",
    "Claude Code",
    "React",
    "Dokploy",
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
    projects: "View Automations",
    resume: "Download Resume",
  },
};

export default profile;
