import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-sm w-100">
        <div className="card-body p-4">
          <h1 className="h4 mb-4">Log in</h1>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" type="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input id="password" type="password" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Log in
            </button>
          </form>

          <p className="text-center small mt-4 mb-0">
            New here? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
