import { useState, useMemo } from "react";
import { usePurchases } from "../contexts/PurchaseContext";
import { getPaid } from "../utils/helpers";
import SearchBar from "../components/SearchBar";
import PurchaseCard from "../components/PurchaseCard";
import PurchaseForm from "../components/PurchaseForm";

export default function Purchases() {
  const { purchases, loading, error, addPurchase, removePurchase } =
    usePurchases();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const filteredPurchases = useMemo(() => {
    const term = search.toLowerCase();

    return purchases.filter((purchase) => {
      const matchesSearch = [purchase.name, purchase.category, purchase.seller]
        .join(" ")
        .toLowerCase()
        .includes(term);

      const isCompleted = getPaid(purchase) >= Number(purchase.totalAmount);
      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !isCompleted) ||
        (filter === "completed" && isCompleted);

      return matchesSearch && matchesFilter;
    });
  }, [purchases, search, filter]);

  const hasActiveFilters = search.trim() !== "" || filter !== "all";

  async function handleCreate(formData) {
    await addPurchase(formData);
    setShowForm(false);
  }

  async function handleDelete(id) {
    if (window.confirm("Delete this purchase and its payment history?")) {
      await removePurchase(id);
    }
  }

  function clearFilters() {
    setSearch("");
    setFilter("all");
  }

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <div>
          <h1 className="h2 fw-bold mb-1">Payment plans</h1>
        </div>
        <button
          className={`btn ${showForm ? "btn-outline-secondary" : "btn-primary"}`}
          onClick={() => setShowForm((open) => !open)}
        >
          {showForm ? "Close form" : "New plan"}
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {showForm && (
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <h2 className="h5 mb-3">Create payment plan</h2>
            <PurchaseForm onSubmit={handleCreate} />
          </div>
        </div>
      )}

      <div className="row g-2 align-items-center mb-3">
        <div className="col-12 col-md-8">
          <SearchBar search={search} onSearch={setSearch} />
        </div>
        <div className="col-12 col-md-4">
          <select
            className="form-select"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            aria-label="Filter payment plans"
          >
            <option value="all">All plans</option>
            <option value="active">Active plans</option>
            <option value="completed">Completed plans</option>
          </select>
        </div>
      </div>

      {filteredPurchases.length === 0 ? (
        <div className="card border-0 shadow-sm text-center py-5">
          <div className="card-body">
            <p className="mb-3 text-secondary">
              {hasActiveFilters
                ? "No payment plans match your search."
                : "You have no payment plans yet."}
            </p>
            {hasActiveFilters ? (
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            ) : (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowForm(true)}
              >
                Create your first plan
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="row g-3">
          {filteredPurchases.map((purchase) => (
            <div className="col-12 col-md-6 col-xl-4" key={purchase.id}>
              <PurchaseCard purchase={purchase} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
