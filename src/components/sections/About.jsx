import SectionHeading from "../common/SectionHeading";

const stats = [
  { value: "7+", label: "Years Professional Experience" },
  { value: "4+", label: "Years in IT & Automation" },
  { value: "$1,860", label: "Annual Hosting Cost Removed" },
  { value: "Zero", label: "Downtime on Production Migration" },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <SectionHeading
              eyebrow="About Me"
              title="Automating the Work People Shouldn't Be Doing by Hand"
            />

            <p className="mt-8 text-slate-400 leading-8">

              I build workflow automations that take repetitive manual
              processes off people's plates — n8n workflows wired into
              LLMs, Telegram, Facebook Messenger, OCR, and Google Sheets.
              The chatbot and transaction pipelines below are running in
              live businesses today, not demos.

            </p>

            <p className="mt-6 text-slate-400 leading-8">

              That work sits on top of an infrastructure background:
              Windows Server, VMware virtualization, Active Directory,
              FortiGate firewalls, backup systems, and structured cabling.
              It's the reason the things I automate keep running after
              handover instead of breaking the first time something
              upstream changes.

            </p>

          </div>

          {/* RIGHT */}

          {/* Every figure here is defensible in an interview. The previous
              tiles ("2 Active Clients", "24/7 Support Mindset") were a small
              number and a slogan dressed as a metric. */}

          <div className="grid grid-cols-2 gap-6">

            {stats.map((stat) => (

              <div
                key={stat.label}
                className="bg-slate-950 rounded-2xl p-8 border border-slate-800"
              >

                <h3 className="text-4xl lg:text-5xl font-bold text-blue-400">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-300">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;