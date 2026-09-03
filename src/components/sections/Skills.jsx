import SectionHeading from "../common/SectionHeading";
import useReveal from "../../hooks/useReveal";

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
      "LangChain AI Agent",
      "OpenRouter",
      "Prompt Engineering",
      "Conversation Memory",
      "Telegram Bot API",
      "Facebook Graph API",
      "Webhooks",
      "REST APIs",
      "OCR.space",
      "Nominatim / OpenStreetMap",
      "Geofencing",
      "Human-in-the-Loop Approval",
      "Google Sheets",
      "Google Drive",
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
      "PowerShell",
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
      "ADMT Migrations",
      "Exchange Online",
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
      "Rundeck",
      "Zabbix",
      "Wazuh",
      "iTop",
      "Odoo",
      "DBeaver",
    ],
  },
];

function Skills() {
  const gridRef = useReveal({ stagger: true });

  return (
    <section id="skills" className="py-20 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <SectionHeading eyebrow="Toolkit" title="Skills">
          The stack I use to automate manual work, ship software with AI coding
          agents, and run the servers underneath it all.
        </SectionHeading>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="font-display font-bold text-[17px] tracking-tight mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-sunk px-3 py-1.5 text-[13px] text-muted"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {group.secondary && (
                <div className="mt-5 pt-4 border-t border-line">

                  <p className="text-[11px] uppercase tracking-[0.16em] text-subtle mb-2.5">
                    Some exposure
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {group.secondary.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-line px-3 py-1.5 text-[13px] text-subtle"
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
