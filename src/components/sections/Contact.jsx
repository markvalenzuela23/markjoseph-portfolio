import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-8 text-center">

        <h2 className="text-4xl font-bold">
          Let's Work Together
        </h2>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
          I'm currently open to remote opportunities in System Administration,
          Technical Support, Workflow Automation, and IT Infrastructure.
          If you think I'd be a good fit for your team, feel free to contact me.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {/* Email */}

          <a
            href="mailto:mark.valenzuela1023@gmail.com"
            className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <FaEnvelope className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              Email
            </h3>

            <p className="text-slate-400 mt-2">
              mark.valenzuela1023@gmail.com
            </p>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/markvalenzuela23"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <FaGithub className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              GitHub
            </h3>

            <p className="text-slate-400 mt-2">
              github.com/markvalenzuela23
            </p>

          </a>

          {/* LinkedIn */}

          <a
            href="#"
            className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <FaLinkedin className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              LinkedIn
            </h3>

            <p className="text-slate-400 mt-2">
              https://www.linkedin.com/in/mark-joseph-valenzuela-66b4b9314/?locale=en
            </p>

          </a>

          {/* Location */}

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">

            <FaMapMarkerAlt className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              Location
            </h3>

            <p className="text-slate-400 mt-2">
              Quezon City, Philippines
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;