import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="hero-section py-5 bg-primary-subtle">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold lh-sm mb-4">
              Track all your payments in one place
            </h1>

            <p className="text-secondary fs-5 mb-4">
              Keep track of every instalment, monitor outstanding balances. From
              land and cars to phones and everyday purchases.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link to="/dashboard" className="btn btn-primary btn-lg px-4">
                Go To Dashboard <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
}
