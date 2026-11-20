import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getBalance, getPaid, formatCurrency } from "../utils/helpers";
import CardSummary from "../components/CardSummary";
import { usePurchases } from "../contexts/PurchaseContext";
import PurchaseCard from "../components/PurchaseCard";
import DashNavbar from "../components/DashNavBar";

const RECENT_LIMIT = 4;

export default function Dashboard() {
  const { purchases, loading, error, removePurchase } = usePurchases();

  const totals = useMemo(() => {
    const commitments = purchases.reduce(
      (sum, item) => sum + Number(item.totalAmount),
      0,
    );
    const paid = purchases.reduce((sum, item) => sum + getPaid(item), 0);
    const balance = purchases.reduce((sum, item) => sum + getBalance(item), 0);
    const active = purchases.filter((item) => getBalance(item) > 0).length;
    const progress = commitments
      ? Math.min(100, Math.round((paid / commitments) * 100))
      : 0;

    return { commitments, paid, balance, active, progress };
  }, [purchases]);

  const { commitments, paid, balance, active, progress } = totals;
  const visiblePurchases = purchases.slice(0, RECENT_LIMIT);

  async function handleDelete(id) {
    if (window.confirm("Delete this purchase and its payment history?")) {
      await removePurchase(id);
    }
  }

  return (
    <>
      <DashNavbar />
      <div className="container py-4 ">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
          <div>
            <h1 className="h2 fw-bold mb-1">Payment dashboard</h1>
          </div>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row g-3 mb-4" bg>
          <div className="col-12 col-sm-6 col-xl-3">
            <CardSummary
              title="Total commitments"
              value={commitments}
              description={`${purchases.length} purchase ${
                purchases.length === 1 ? "plan" : "plans"
              }`}
            />
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <CardSummary
              title="Total amount paid"
              value={paid}
              description="Across all purchases"
            />
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <CardSummary
              title="Outstanding balance"
              value={balance}
              description="Amount remaining to pay"
            />
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <CardSummary
              title="Active plans"
              value={active}
              description="Plans being paid"
              isCount
            />
          </div>
        </div>

        <section className="card border-0 shadow-sm mb-4"></section>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-0">My payment plans</h2>
          </div>
          <Link to="/purchases" className="btn btn-outline-primary btn-sm">
            View all
          </Link>
        </div>

        {purchases.length === 0 ? (
          <div className="card border-0 shadow-sm text-center py-5">
            <div className="card-body">
              <p className="text-secondary mb-3">No payment plans yet.</p>
              <Link to="/purchases" className="btn btn-primary btn-sm">
                Add your first purchase
              </Link>
            </div>
          </div>
        ) : (
          <div className="row g-3">
            {visiblePurchases.map((purchase) => (
              <div className="col-12 col-md-6 col-xl-4" key={purchase.id}>
                <PurchaseCard purchase={purchase} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
