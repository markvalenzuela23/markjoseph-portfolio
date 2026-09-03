import { useEffect, useState } from "react";
import profile from "../../data/profile";
import ThemeToggle from "../common/ThemeToggle";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "method", label: "How I Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// Highlights whichever section currently occupies the middle of the viewport,
// so the nav tells you where you are instead of staying inert while you scroll.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(navLinks.map((link) => link.id));

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 pt-4">
      <nav className="max-w-6xl mx-auto rounded-2xl border border-line bg-surface/90 backdrop-blur-xl shadow-[var(--shadow-md)]">

        <div className="flex items-center justify-between gap-4 py-2.5 pl-4 pr-2.5 sm:pl-5">

          <a
            href="#home"
            className="flex items-center gap-2.5 shrink-0"
            onClick={closeMenu}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-accent">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-ink)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 17l6-6-6-6" />
                <path d="M12 19h8" />
              </svg>
            </span>
            <span className="font-display font-bold text-[15px] tracking-tight">
              Mark Valenzuela
            </span>
          </a>

          {/* ================= DESKTOP ================= */}

          <div className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active === link.id
                    ? "bg-accent-soft text-accent font-semibold"
                    : "text-muted hover:text-ink hover:bg-sunk"
                }`}
              >
                {link.label}
              </a>
            ))}

            <span className="mx-2 h-5 w-px bg-line" aria-hidden="true" />

            <ThemeToggle />

            <a
              href={profile.resumeUrl}
              className="ml-1 inline-flex items-center gap-2 rounded-[9px] bg-ink px-4 py-2 text-sm font-semibold text-canvas hover:opacity-90 transition"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Résumé
            </a>

          </div>

          {/* ================= MOBILE ================= */}

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="rounded-lg p-2 text-muted hover:text-ink hover:bg-sunk transition"
            >
              {isOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-line px-3 py-3"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`rounded-lg px-3 py-3 text-[15px] transition ${
                    active === link.id
                      ? "bg-accent-soft text-accent font-semibold"
                      : "text-muted hover:text-ink hover:bg-sunk"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href={profile.resumeUrl}
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-[9px] bg-ink px-4 py-3 text-[15px] font-semibold text-canvas"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Résumé
              </a>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;
