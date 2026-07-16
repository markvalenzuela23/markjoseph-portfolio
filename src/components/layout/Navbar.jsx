function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a
  href="#"
  className="text-white text-2xl font-bold tracking-wide hover:text-blue-400 transition"
>
  MJV
</a>

        <ul className="flex items-center gap-8 text-slate-300 font-medium">

          <li>
  <a
    href="#about"
    className="hover:text-blue-400 transition"
  >
    About
  </a>
</li>

          <li>
  <a
    href="#skills"
    className="hover:text-blue-400 transition"
  >
    Skills
  </a>
</li>

          <li>
  <a
    href="#experience"
    className="hover:text-blue-400 transition"
  >
    Experience
  </a>
</li>

          <li>
  <a
    href="#projects"
    className="hover:text-blue-400 transition"
  >
    Projects
  </a>
</li>

          <li>
  <a
    href="#contact"
    className="hover:text-blue-400 transition"
  >
    Contact
  </a>
</li>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar