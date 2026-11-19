export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  const socials = [
    { icon: "bi-twitter-x", href: "#", label: "X" },
    { icon: "bi-linkedin", href: "#", label: "LinkedIn" },
    { icon: "bi-github", href: "#", label: "GitHub" },
  ];

  const circle = { width: 36, height: 36 };

  return (
    <footer id="about" className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-5">
            <a
              href="#home"
              className="d-inline-flex align-items-center text-white text-decoration-none fs-4 fw-bold"
            >
              <span>PayTracker</span>
            </a>

            <p className="text-white-50 mt-3 mb-4 col-lg-10 px-0">
              Making instalment payment tracking simple, organised and
              transparent.
            </p>

            <div className="d-flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="btn btn-outline-light rounded-circle d-inline-flex align-items-center justify-content-center p-0"
                  style={circle}
                  aria-label={s.label}
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <nav className="col-6 col-lg-3 offset-lg-1" aria-label="Footer">
            <h6 className="text-uppercase small fw-bold text-white-50 mb-3">
              Explore
            </h6>
            <ul className="list-unstyled mb-0">
              {links.map((l) => (
                <li key={l.href} className="mb-2">
                  <a
                    href={l.href}
                    className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                  >
                    <i className="bi bi-chevron-right small me-1"></i>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 border-top border-secondary border-opacity-50 mt-5 py-4">
          <small className="text-white-50">
            © {year} PayTrack. All rights reserved.
          </small>
          <a
            href="#home"
            className="link-light link-opacity-75 link-opacity-100-hover text-decoration-none small"
          >
            Back to top <i className="bi bi-arrow-up ms-1"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
