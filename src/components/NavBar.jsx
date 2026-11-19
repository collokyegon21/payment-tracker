import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top py-3 border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          PayTracker
        </a>

        <button
          className="navbar-toggler shadow-none"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="main-nav"
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto gap-lg-3">
            {links.map((link, index) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
