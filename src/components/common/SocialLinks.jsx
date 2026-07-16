import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex gap-5 mt-10 text-3xl">

      <a
        href="https://github.com/markvalenzuela23"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-blue-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="#"
        className="text-slate-400 hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:YOUR_EMAIL"
        className="text-slate-400 hover:text-blue-400 transition"
      >
        <FaEnvelope />
      </a>

      <a
        href="/resume.pdf"
        className="text-slate-400 hover:text-blue-400 transition"
      >
        <FaFileDownload />
      </a>

    </div>
  );
}

export default SocialLinks;