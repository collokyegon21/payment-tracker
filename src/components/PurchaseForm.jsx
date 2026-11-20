import { useState } from "react";

export default function PurchaseForm({ onSubmit }) {
  const initialForm = {
    name: "",
    category: "Land",
    seller: "",
    totalAmount: "",
    startDate: new Date().toISOString().slice(0, 10),
    dueDate: "",
    frequency: "Monthly",
  };

  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (Number(form.totalAmount) <= 0) return;
    await onSubmit(form);
    setForm(initialForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Purchase name</label>
        <input
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g Land "
          required
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            {[
              "Land",
              "Property",
              "Vehicle",
              "Phone & Electronics",
              "Furniture",
              "Loan",
              "Other",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Seller</label>
          <input
            className="form-control"
            name="seller"
            value={form.seller}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Total agreed price (KES)</label>
        <input
          className="form-control"
          type="number"
          min="1"
          name="totalAmount"
          value={form.totalAmount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Start date</label>
          <input
            className="form-control"
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Final due date</label>
          <input
            className="form-control"
            type="date"
            name="dueDate"
            min={form.startDate}
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Payment frequency</label>
        <select
          className="form-select"
          name="frequency"
          value={form.frequency}
          onChange={handleChange}
        >
          {["Daily", "Weekly", "Bi-weekly", "Monthly", "Flexible"].map(
            (item) => (
              <option key={item}>{item}</option>
            ),
          )}
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Add New Purchase
      </button>
    </form>
  );
}
