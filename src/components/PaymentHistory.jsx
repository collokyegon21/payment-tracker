import { formatCurrency, formatDate } from "../utils/helpers";

export default function PaymentHistory({ payments, onDelete }) {
  if (!payments.length) {
    return <p className="text-secondary mb-0">No payments recorded yet.</p>;
  }

  return (
    <div className="list-group list-group-flush">
      {[...payments].sort((a, b) => b.date.localeCompare(a.date)).map((payment) => (
        <div className="list-group-item px-0 d-flex justify-content-between align-items-center gap-3" key={payment.id}>
          <div>
            <strong>{formatCurrency(payment.amount)}</strong>
            <div className="small text-secondary">
              {formatDate(payment.date)} · {payment.method}
              {payment.reference ? ` · Ref: ${payment.reference}` : ""}
            </div>
            {payment.notes && <div className="small text-secondary">{payment.notes}</div>}
          </div>
          {onDelete && (
            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(payment.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
