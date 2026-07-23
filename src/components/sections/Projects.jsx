import projects from "../../data/projects";

import workflowImg from "../../assets/projects/gcash-buyload-workflow.png";
import telegramImg from "../../assets/projects/gcash-buyload-telegram.png";
import sheetImg from "../../assets/projects/gcash-buyload-sheet.png";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-4">
          Featured Professional Projects
        </h2>

        <p className="text-slate-400 mb-16 max-w-3xl">
          Real-world infrastructure deployments and workflow automation
          solutions built for businesses and clients.
        </p>

        <div className="space-y-12">

          {projects.map((project) =>

            project.featured ? (

              <div
                key={project.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >

                <div className="grid lg:grid-cols-2">

                  {/* LEFT */}

                  <img
                    src={workflowImg}
                    alt="Workflow"
                    className="w-full h-full object-cover"
                  />

                  {/* RIGHT */}

                  <div className="p-10 flex flex-col justify-center">

                    <span className="w-fit bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
                      ⭐ Featured Project
                    </span>

                    <h3 className="text-4xl font-bold mt-6">
                      {project.title}
                    </h3>

                    <p className="text-blue-400 mt-3 text-lg">
                      {project.role}
                    </p>

                    <p className="text-slate-500 mt-1">
                      {project.client}
                    </p>

                    <p className="text-slate-300 leading-8 mt-8">
                      {project.description}
                    </p>

                    {/* Metrics */}

                    <div className="grid grid-cols-2 gap-4 mt-8">

                      <div className="bg-slate-900 rounded-xl p-5">
                        <p className="text-3xl font-bold text-blue-400">
                          100%
                        </p>

                        <p className="text-slate-400 text-sm mt-1">
                          Automated Workflow
                        </p>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-5">
                        <p className="text-3xl font-bold text-blue-400">
                          OCR + AI
                        </p>

                        <p className="text-slate-400 text-sm mt-1">
                          Data Processing
                        </p>
                      </div>

                    </div>

                    {/* Technologies */}

                    <div className="flex flex-wrap gap-3 mt-8">

                      {project.technologies.map((tech) => (

                        <span
                          key={tech}
                          className="bg-slate-800 px-4 py-2 rounded-full text-sm"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* Achievements */}

                    <div className="mt-10">

                      <h4 className="text-lg font-semibold mb-4">
                        Key Contributions
                      </h4>

                      <ul className="grid md:grid-cols-2 gap-3">

                        {project.achievements.map((item) => (

                          <li
                            key={item}
                            className="text-slate-400"
                          >
                            ✔ {item}
                          </li>

                        ))}

                      </ul>

                    </div>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-10">

                      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-semibold transition">
                        View Workflow
                      </button>

                      <button className="border border-slate-600 hover:border-white px-5 py-3 rounded-lg transition">
                        View Screenshots
                      </button>

                    </div>

                  </div>

                </div>

                {/* Gallery */}

                <div className="grid md:grid-cols-3 gap-6 p-8 border-t border-slate-800">

                  <img
                    src={workflowImg}
                    alt="Workflow"
                    className="rounded-xl border border-slate-700 hover:scale-105 transition duration-300 cursor-pointer"
                  />

                  <img
                    src={telegramImg}
                    alt="Telegram"
                    className="rounded-xl border border-slate-700 hover:scale-105 transition duration-300 cursor-pointer"
                  />

                  <img
                    src={sheetImg}
                    alt="Google Sheet"
                    className="rounded-xl border border-slate-700 hover:scale-105 transition duration-300 cursor-pointer"
                  />

                </div>

              </div>

            ) : (

              <div
                key={project.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {project.role}
                </p>

                <p className="text-slate-500">
                  {project.client}
                </p>

                <p className="text-slate-300 leading-8 mt-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-slate-800 px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-8">

                  <h4 className="text-lg font-semibold mb-3">
                    Key Contributions
                  </h4>

                  <ul className="grid md:grid-cols-2 gap-2">

                    {project.achievements.map((item) => (

                      <li
                        key={item}
                        className="text-slate-400"
                      >
                        ✔ {item}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            )

          )}

        </div>

      </div>
    </section>
  );
}

export default Projects;