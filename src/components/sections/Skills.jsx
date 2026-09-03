// Ordered by what the portfolio leads with: AI automation and AI-assisted
// development first, then the infrastructure skills that support them.
//
// `secondary` holds tools with genuine but limited exposure. They render
// separately so the main list stays an honest signal of depth.
const skillGroups = [
  {
    title: "AI Automation",
    skills: [
      "n8n",
      "OpenAI API",
      "Google Gemini",
      "AI Agents",
      "Prompt Engineering",
      "Telegram Bot API",
      "Facebook Messenger API",
      "Webhooks",
      "REST APIs",
      "OCR",
      "Google Sheets",
      "Google Forms",
    ],
  },
  {
    title: "AI-Assisted Development",
    skills: [
      "Claude Code",
      "AI Coding Agents",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Python",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "Git Worktrees",
      "GitHub",
    ],
    secondary: ["Replit"],
  },
  {
    title: "Servers & Deployment",
    skills: [
      "Hostinger KVM 8 VPS",
      "Dokploy",
      "Docker",
      "Docker Swarm",
      "Linux Provisioning",
      "PostgreSQL",
      "pg_dump / rclone",
      "DNS & DMARC",
      "Zero-Downtime Cutover",
    ],
  },
  {
    title: "System Administration",
    skills: [
      "Windows Server",
      "Active Directory",
      "Group Policy",
      "VMware ESXi",
      "Veeam Backup",
      "TrueNAS",
      "Synology NAS",
      "Windows 10/11",
    ],
  },
  {
    title: "Networking",
    skills: [
      "FortiGate",
      "MikroTik",
      "pfSense",
      "VLAN",
      "VPN",
      "Load Balancing",
      "Omada",
      "TP-Link",
      "Network Cabling",
    ],
  },
  {
    title: "Support & Tools",
    skills: [
      "Microsoft 365",
      "Remote Support",
      "Troubleshooting",
      "Hardware",
      "Printer",
      "VS Code",
      "Zabbix",
      "Odoo",
      "DBeaver",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-4">
          Skills
        </h2>

        <p className="text-slate-400 mb-16 max-w-2xl">
          The stack I use to automate manual work, ship software with AI coding
          agents, and run the servers underneath it all.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {group.secondary && (
                <div className="mt-6 pt-5 border-t border-slate-800">

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                    Some exposure
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {group.secondary.map((skill) => (
                      <span
                        key={skill}
                        className="border border-slate-700 text-slate-400 px-4 py-2 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
