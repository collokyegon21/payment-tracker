import { createContext, useContext, useEffect, useState } from "react";
import {
  getPurchases,
  getPayments,
  createPurchase,
  createPayment,
  updatePurchase,
  deletePurchaseRequest,
  deletePaymentRequest,
} from "../services/api";

const PurchaseContext = createContext();

export function PurchaseProvider({ children }) {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const [purchaseData, paymentData] = await Promise.all([
        getPurchases(),
        getPayments(),
      ]);

      const purchasesWithPayments = purchaseData.map((purchase) => ({
        ...purchase,
        payments: paymentData.filter(
          (payment) => String(payment.purchaseId) === String(purchase.id),
        ),
      }));

      setPurchases(purchasesWithPayments);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function addPurchase(formData) {
    const newPurchase = {
      ...formData,
      totalAmount: Number(formData.totalAmount),
      createdAt: new Date().toISOString(),
    };
    await createPurchase(newPurchase);
    await loadData();
  }

  async function addPayment(purchaseId, formData) {
    const payment = {
      ...formData,
      purchaseId: String(purchaseId),
      amount: Number(formData.amount),
    };
    await createPayment(payment);
    await loadData();
  }

  async function editPurchase(id, updates) {
    await updatePurchase(id, updates);
    await loadData();
  }

  async function removePurchase(id) {
    const purchase = purchases.find((item) => String(item.id) === String(id));
    if (purchase) {
      await Promise.all(
        purchase.payments.map((payment) => deletePaymentRequest(payment.id)),
      );
    }
    await deletePurchaseRequest(id);
    await loadData();
  }

  async function removePayment(id) {
    await deletePaymentRequest(id);
    await loadData();
  }

  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        loading,
        addPurchase,
        addPayment,
        editPurchase,
        removePurchase,
        removePayment,
        refresh: loadData,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchases() {
  return useContext(PurchaseContext);
}
