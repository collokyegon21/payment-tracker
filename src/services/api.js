const API_URL = "http://localhost:3000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

// GET
export const getPurchases = () => request("/purchases");
export const getPayments = () => request("/payments");

// POST
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

// PATCH
export const updatePurchase = (id, data) =>
  request(`/purchases/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

// DELETE
export const deletePurchaseRequest = (id) =>
  request(`/purchases/${id}`, { method: "DELETE" });

export const deletePaymentRequest = (id) =>
  request(`/payments/${id}`, { method: "DELETE" });
