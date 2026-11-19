import { Link } from "react-router-dom";
import { formatCurrency, getPaid, getBalance } from "../utils/helpers";

export default function PurchaseCard({ purchase, onDelete }) {
  const paid = getPaid(purchase);
  const balance = getBalance(purchase);


  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <div>
            <span className="badge text-bg-light mb-2">
              {purchase.category}
            </span>
            <h5 className="card-title mb-1">{purchase.name}</h5>
            <p className="text-secondary small mb-0">
              {purchase.seller || "Seller not specified"}
            </p>
          </div>
          <span
            className={`badge align-self-start ${balance === 0 ? "text-bg-success" : "text-bg-primary"}`}
          >
            {balance === 0 ? "Completed" : "Ongoing"}
          </span>
        </div>

        <div className="row g-2 mb-3">
          <div className="col-6">
            <small className="text-secondary d-block">Total price</small>
            <strong>{formatCurrency(purchase.totalAmount)}</strong>
          </div>
          <div className="col-6">
            <small className="text-secondary d-block">Remaining</small>
            <strong>{formatCurrency(balance)}</strong>
          </div>
        </div>

        <div className="d-flex gap-2">
          <Link
            className="btn btn-primary btn-sm"
            to={`/purchases/${purchase.id}`}
          >
            View details
          </Link>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(purchase.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
