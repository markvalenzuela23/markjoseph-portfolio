function About() {
  return (
    <section
  id="about"
  className="bg-slate-900 text-white py-28 scroll-mt-24"
>
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="text-slate-300 leading-8 text-lg mb-6">
              I'm an IT professional specializing in System Administration,
              Technical Support, Network Infrastructure, and Workflow
              Automation. I enjoy solving technical problems, building reliable
              infrastructures, and automating repetitive tasks.
            </p>

            <p className="text-slate-300 leading-8 text-lg mb-6">
              Throughout my career, I've deployed enterprise servers,
              implemented virtualization, configured firewalls, managed backup
              systems, and designed network infrastructures for schools and
              businesses.
            </p>

            <p className="text-slate-300 leading-8 text-lg">
              Recently, I've expanded into Workflow Automation using n8n,
              integrating APIs, Telegram Bots, Google Sheets, and AI to help
              businesses automate their daily operations.
            </p>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-blue-400 text-3xl font-bold">
                6+
              </h3>

              <p className="mt-2 text-slate-300">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-blue-400 text-3xl font-bold">
                50+
              </h3>

              <p className="mt-2 text-slate-300">
                Completed Projects
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-blue-400 text-3xl font-bold">
                2
              </h3>

              <p className="mt-2 text-slate-300">
                Active Clients
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-blue-400 text-3xl font-bold">
                24/7
              </h3>

              <p className="mt-2 text-slate-300">
                Problem Solver
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;