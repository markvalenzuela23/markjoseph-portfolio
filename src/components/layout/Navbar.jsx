import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from "../../data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-5">

        <a
          href="#"
          className="text-white text-2xl font-bold tracking-wide hover:text-blue-400 transition"
        >
          MJV
        </a>

        {/* ================= DESKTOP ================= */}

        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">

          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href={profile.resumeUrl}
              className="hover:text-blue-400 transition"
            >
              Resume
            </a>
          </li>

        </ul>

        {/* ================= MOBILE TOGGLE ================= */}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-slate-300 text-2xl hover:text-blue-400 transition"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-4 flex flex-col gap-1 text-slate-300 font-medium"
        >

          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-3 hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href={profile.resumeUrl}
              onClick={closeMenu}
              className="block py-3 hover:text-blue-400 transition"
            >
              Resume
            </a>
          </li>

        </ul>
      )}

    </nav>
  );
}

export default Navbar;
