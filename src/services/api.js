const API_URL = "http://localhost:3000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    throw new Error(` ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

export const getPurchases = () => request("/purchases");
export const getPayments = () => request("/payments");

export const createPurchase = (data) =>
  request("/purchases", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const createPayment = (data) =>
  request("/payments", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updatePurchase = (id, data) =>
  request(`/purchases/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

export const deletePurchaseRequest = (id) =>
  request(`/purchases/${id}`, { method: "DELETE" });

export const deletePaymentRequest = (id) =>
  request(`/payments/${id}`, { method: "DELETE" });
