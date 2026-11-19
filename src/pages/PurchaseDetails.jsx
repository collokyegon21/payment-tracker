import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { usePurchases } from "../contexts/PurchaseContext";
import PaymentForm from "../components/PaymentForm";
import PaymentHistory from "../components/PaymentHistory";
import {
  formatCurrency,
  formatDate,
  getPaid,
  getBalance,
} from "../utils/helpers";

export default function PurchaseDetails() {
  const { id } = useParams();
  const { purchases, loading, addPayment, removePayment, editPurchase } =
    usePurchases();
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const purchase = purchases.find((item) => String(item.id) === String(id));

  if (loading) return <p>Loading purchase...</p>;
  if (!purchase) {
    return (
      <div className="alert alert-warning">
        Purchase not found <Link to="/purchases">Return to payment plans</Link>
      </div>
    );
  }

  async function handlePayment(data) {
    await addPayment(purchase.id, data);
    setShowPaymentForm(false);
  }

  return (
    <>
      <div className="container py-4">
        <Link to="/purchases" className="btn btn-outline-secondary btn-sm mb-4">
          Back
        </Link>
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 my-4">
          <div>
            <span className="badge text-bg-light mb-2">
              {purchase.category}
            </span>
            <h1 className="h2 fw-bold">{purchase.name}</h1>
            <p className="text-secondary mb-0">
              {purchase.seller || "Seller not specified"}
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setShowPaymentForm(!showPaymentForm)}
            disabled={getBalance(purchase) <= 0}
          >
            Record payment
          </button>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <small className="text-secondary">Total price</small>
                <h4>{formatCurrency(purchase.totalAmount)}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <small className="text-secondary">Amount paid</small>
                <h4>{formatCurrency(getPaid(purchase))}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <small className="text-secondary">Outstanding balance</small>
                <h4>{formatCurrency(getBalance(purchase))}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <h2 className="h5">Plan information</h2>
            <div className="row g-3">
              <div className="col-sm-6">
                <small className="text-secondary">Start date</small>
                <div>{formatDate(purchase.startDate)}</div>
              </div>
              <div className="col-sm-6">
                <small className="text-secondary">Final due date</small>
                <div>{formatDate(purchase.dueDate)}</div>
              </div>
              <div className="col-sm-6">
                <small className="text-secondary">Frequency</small>
                <div>{purchase.frequency}</div>
              </div>
              <div className="col-sm-6">
                <small className="text-secondary">Status</small>
                <div>
                  {getBalance(purchase) === 0 ? "Completed" : "Ongoing"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showPaymentForm && (
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h5">Record an instalment</h2>
              <PaymentForm purchase={purchase} onSubmit={handlePayment} />
            </div>
          </div>
        )}

        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h2 className="h5">Payment history</h2>
            <PaymentHistory
              payments={purchase.payments}
              onDelete={removePayment}
            />
          </div>
        </div>
      </div>
    </>
  );
}
