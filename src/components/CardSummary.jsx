export default function CardSummary({
  title,
  value,
  description,
  isCount = false,
}) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <p className="text-secondary mb-2">{title}</p>
        <h3 className="fw-bold mb-1">{isCount ? value : value}</h3>
        <small className="text-secondary">{description}</small>
      </div>
    </div>
  );
}
