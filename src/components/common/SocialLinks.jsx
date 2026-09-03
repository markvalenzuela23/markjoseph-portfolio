import profile from "../../data/profile";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const links = [
  { key: "github", href: profile.social.github, label: "GitHub", Icon: FaGithub, external: true },
  { key: "linkedin", href: profile.social.linkedin, label: "LinkedIn", Icon: FaLinkedin, external: true },
  { key: "email", href: `mailto:${profile.social.email}`, label: "Email", Icon: FaEnvelope },
  { key: "resume", href: profile.resumeUrl, label: "Download résumé", Icon: FaFileDownload, download: true },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">

      {links.map(({ key, href, label, Icon, external, download }) => (
        <a
          key={key}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(download ? { download: true } : {})}
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-surface text-muted hover:text-accent hover:border-accent transition"
        >
          <Icon className="text-lg" aria-hidden="true" />
        </a>
      ))}

    </div>
  );
}

export default SocialLinks;
