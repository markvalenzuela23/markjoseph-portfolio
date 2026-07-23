import profile from "../../data/profile";

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

            <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
              About Me
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Building Reliable IT Infrastructure &
              Automation Solutions
            </h2>

            <p className="mt-8 text-slate-400 leading-8">

              I'm an IT professional specializing in enterprise system
              administration, network infrastructure, workflow automation,
              and technical support. I enjoy solving complex technical
              challenges and creating reliable solutions that improve
              business operations.

            </p>

            <p className="mt-6 text-slate-400 leading-8">

              Throughout my career, I've deployed Windows Server
              environments, VMware virtualization, Active Directory,
              FortiGate firewalls, backup solutions, structured cabling,
              and automated workflows using n8n, OpenAI, and Telegram.

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