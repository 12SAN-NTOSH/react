import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import "./styles/App.css"; // Import global styles

function App() {
  const [logo, setLogo] = useState("default-logo.png"); // Set a default logo
  const [companyName, setCompanyName] = useState("My Store");
  const [companyAddress, setCompanyAddress] = useState(
    "123 Main St, City, Country"
  );
  const [companyEmail, setCompanyEmail] = useState("info@mystore.com");
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <Admin
                setLogo={setLogo}
                setCompanyName={setCompanyName}
                setCompanyAddress={setCompanyAddress}
                setCompanyEmail={setCompanyEmail}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
