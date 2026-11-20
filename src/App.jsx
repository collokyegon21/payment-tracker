import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import { PurchaseProvider } from "./contexts/PurchaseContext";
import Purchases from "./pages/Purchases";
import PurchaseDetails from "./pages/PurchaseDetails";
import Login from "./pages/login";
import PaymentHistory from "./components/PaymentHistory";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <PurchaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/login" element={<Login />} />
            <Route path="/purchases/:id" element={<PurchaseDetails />} />
            <Route path="/register" element ={<Register/>}/>
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </PurchaseProvider>
    </>
  );
}

export default App;
