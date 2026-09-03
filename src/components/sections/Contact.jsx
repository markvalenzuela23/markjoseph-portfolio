import profile from "../../data/profile";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Strips the protocol and any leading "www." so cards show a readable handle
// instead of the full URL.
const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

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
            href={`mailto:${profile.social.email}`}
            className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <FaEnvelope className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              Email
            </h3>

            <p className="text-slate-400 mt-2 break-words">
              {profile.social.email}
            </p>

          </a>

          {/* GitHub */}

          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <FaGithub className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              GitHub
            </h3>

            <p className="text-slate-400 mt-2 break-words">
              {displayUrl(profile.social.github)}
            </p>

          </a>

          {/* LinkedIn */}

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <FaLinkedin className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              LinkedIn
            </h3>

            <p className="text-slate-400 mt-2 break-words">
              {displayUrl(profile.social.linkedin)}
            </p>

          </a>

          {/* Location */}

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">

            <FaMapMarkerAlt className="text-3xl text-blue-400 mx-auto mb-4" />

            <h3 className="font-semibold">
              Location
            </h3>

            <p className="text-slate-400 mt-2">
              {profile.location}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
