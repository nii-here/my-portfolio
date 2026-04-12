import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navLink = ({ isActive }) =>
  `block px-4 py-2 rounded-xl text-sm font-medium transition ${
    isActive
      ? "bg-black text-white"
      : "text-neutral-700 hover:bg-neutral-100"
  }`;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight sm:text-xl"
        >
          Clement Tetteh
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <NavLink end to="/" className={navLink}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navLink}>
            Projects
          </NavLink>
          <NavLink to="/about" className={navLink}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-xl border border-neutral-300 p-2 md:hidden"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            <NavLink end to="/" className={navLink} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/projects" className={navLink} onClick={() => setOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/about" className={navLink} onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLink} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}