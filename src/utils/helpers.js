export const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0);

export const formatDate = (date) => {
  if (!date) return "Not specified";
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const getPaid = (purchase) =>
  (purchase.payments || []).reduce(
    (sum, payment) => sum + Number(payment.amount),
    0,
  );

export const getBalance = (purchase) =>
  Math.max(0, Number(purchase.totalAmount) - getPaid(purchase));
