function Skills() {
  const skillGroups = [
    {
      title: "System Administration",
      skills: [
        "Veeam Backup",
        "Windows Server",
        "Windows 10/11",
        "Active Directory",
        "Group Policy",
        "VMware ESXi",
        "TrueNAS",
        "Synology NAS",
      ],
    },
    {
      title: "Networking",
      skills: [
        "MikroTik",
        "FortiGate",
        "pfSense",
        "Omada",
        "TP-Link",
        "VPN",
        "VLAN",
        "Load Balancing",
        "Network Cabling",
      ],
    },
    {
      title: "Workflow Automation",
      skills: [
        "n8n",
        "OpenAI API",
        "Telegram Bot API",
        "Google Sheets",
        "Google Forms",
        "OCR",
        "Webhooks",
        "JSON",
        "HTTP Requests",
        "REST APIs",
      ],
    },
    {
      title: "Technical Support",
      skills: [
        "Windows",
        "Microsoft 365",
        "Hardware",
        "Printer",
        "Remote Support",
        "Troubleshooting",
      ],
    },
    {
      title: "Programming",
      skills: [
        "Python",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Odoo",
        "DBeaver",
        "Zabbix",
      ],
    },
  ];

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
          Technologies and tools I use to deploy, maintain,
          troubleshoot, and automate IT infrastructures.
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

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;