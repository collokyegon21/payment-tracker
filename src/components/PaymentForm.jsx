import { useState } from "react";
import { getBalance, formatCurrency } from "../utils/helpers";

export default function PaymentForm({ purchase, onSubmit }) {
  const [form, setForm] = useState({
    amount: "",
    date: new Date().toISOString().slice(0, 10),
    method: "M-Pesa",
    reference: "",
    notes: "",
  });

  const balance = getBalance(purchase);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const amount = Number(form.amount);

    if (amount <= 0 || amount > balance) {
      alert(`Enter an amount between 1 and ${balance}.`);
      return;
    }

    await onSubmit(form);
    setForm({
      amount: "",
      date: new Date().toISOString().slice(0, 10),
      method: "M-Pesa",
      reference: "",
      notes: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="alert alert-info">
        Outstanding balance: <strong>{formatCurrency(balance)}</strong>
      </div>
      <div className="mb-3">
        <label className="form-label">Amount paid (KES)</label>
        <input
          className="form-control"
          type="number"
          name="amount"
          min="1"
          max={balance}
          value={form.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Payment date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Payment method</label>
          <select
            className="form-select"
            name="method"
            value={form.method}
            onChange={handleChange}
          >
            {["M-Pesa", "Bank Transfer", "Cash", "Card", "Other"].map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Transaction reference</label>
        <input
          className="form-control"
          name="reference"
          value={form.reference}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Notes</label>
        <textarea
          className="form-control"
          name="notes"
          rows="2"
          value={form.notes}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={balance <= 0}>
        Save payment
      </button>
    </form>
  );
}
