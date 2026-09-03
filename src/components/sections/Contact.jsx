import profile from "../../data/profile";
import SectionHeading from "../common/SectionHeading";
import useReveal from "../../hooks/useReveal";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Strips the protocol and any leading "www." so cards show a readable handle
// instead of the full URL.
const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

const channels = [
  {
    key: "email",
    Icon: FaEnvelope,
    label: "Email",
    value: profile.social.email,
    href: `mailto:${profile.social.email}`,
  },
  {
    key: "github",
    Icon: FaGithub,
    label: "GitHub",
    value: displayUrl(profile.social.github),
    href: profile.social.github,
    external: true,
  },
  {
    key: "linkedin",
    Icon: FaLinkedin,
    label: "LinkedIn",
    value: displayUrl(profile.social.linkedin),
    href: profile.social.linkedin,
    external: true,
  },
];

function Contact() {
  const cardsRef = useReveal({ stagger: true });

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's work together"
          align="center"
        >
          I'm open to remote work in AI automation, AI-assisted development, and
          IT infrastructure. If you think I'd be a good fit for your team, get
          in touch.
        </SectionHeading>

        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4 mt-12">

          {channels.map(({ key, Icon, label, value, href, external }) => (
            <a
              key={key}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rounded-2xl border border-line bg-surface p-6 hover:border-accent transition"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-accent-soft">
                <Icon className="text-[17px] text-accent" aria-hidden="true" />
              </span>

              <div className="font-display font-bold text-[16px] tracking-tight mt-4">
                {label}
              </div>

              <div className="text-[14px] text-muted mt-1 break-words">
                {value}
              </div>
            </a>
          ))}

          {/* Not a link, so it deliberately carries no hover affordance. */}
          <div className="rounded-2xl border border-line bg-sunk p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-surface">
              <FaMapMarkerAlt className="text-[17px] text-subtle" aria-hidden="true" />
            </span>

            <div className="font-display font-bold text-[16px] tracking-tight mt-4">
              Location
            </div>

            <div className="text-[14px] text-muted mt-1">
              {profile.location}
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-line text-center text-[13.5px] text-subtle">
          Built with React, Vite and Tailwind &mdash; and a fair amount of Claude Code.
        </div>

      </div>
    </section>
  );
}

export default Contact;
