import { Link, NavLink } from "react-router-dom";

export default function DashNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        <Link to="/home" className="navbar-brand fw-bold fs-4">
          PayTracker
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold nav-pills" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold nav-pills" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/purchases"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold nav-pills" : ""}`
                }
              >
                My Purchases
              </NavLink>
            </li>

            {/* <li className="nav-item ms-lg-2">
              <Link to="/purchases" className="btn btn-primary btn-sm px-3">
                + Add Purchase
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
