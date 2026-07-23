import experience from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Career Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Professional Experience
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            My journey in enterprise infrastructure, systems administration,
            workflow automation, and technical consulting.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 bottom-0 w-1 bg-slate-700"></div>

          {experience.map((job) => (

            <div
              key={job.id}
              className="relative pl-20 pb-16"
            >

              {/* Timeline Dot */}

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-500 border-4 border-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.7)]"></div>

              {/* Card */}

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

                <span className="text-blue-400 font-semibold">
                  {job.duration}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {job.position}
                </h3>

                <p className="text-slate-300 mt-2 text-lg">
                  {job.company}
                </p>

                <p className="text-slate-400 leading-8 mt-6">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-3 mt-8">

                  {job.achievements.map((item) => (

                    <div
                      key={item}
                      className="bg-slate-800 rounded-lg px-4 py-3 text-slate-300"
                    >
                      ✔ {item}
                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;