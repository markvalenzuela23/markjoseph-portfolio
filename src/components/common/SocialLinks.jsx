import profile from "../../data/profile";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex gap-6 text-3xl text-slate-400">

      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <FaGithub />
      </a>

      <a
        href={profile.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0A66C2] transition"
      >
        <FaLinkedin />
      </a>

      <a
        href={profile.social.email}
        className="hover:text-red-400 transition"
      >
        <FaEnvelope />
      </a>

      <a
        href="/resume.pdf"
        download
        className="hover:text-blue-400 transition"
      >
        <FaFileDownload />
      </a>

    </div>
  );
}

export default SocialLinks;