import SectionHeading from "../common/SectionHeading";

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

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400">
                3+
              </h3>

              <p className="mt-3 text-slate-300">
                Years Experience
              </p>

            </div>

            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400">
                2
              </h3>

              <p className="mt-3 text-slate-300">
                Active Clients
              </p>

            </div>

            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400">
                4+
              </h3>

              <p className="mt-3 text-slate-300">
                Enterprise Projects
              </p>

            </div>

            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">

              <h3 className="text-5xl font-bold text-blue-400">
                24/7
              </h3>

              <p className="mt-3 text-slate-300">
                Support Mindset
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;