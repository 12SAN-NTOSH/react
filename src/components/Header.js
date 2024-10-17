import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import trolleyImage from "../assets/images/trolley.png"; // Adjust the path based on your folder structure

const products = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Another Product",
  "Sample Product",
  "Product 4",
  "Amazing Product",
  // Add more products as needed
];

function Header({ logo, companyName, companyAddress, companyEmail }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Only filter products if the search query length is greater than 0
    if (value.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]); // Clear suggestions when input is empty
    }
  };

  const handleProductSelect = (product) => {
    setSearchQuery(product); // Set the selected product as the search query
    setFilteredProducts([]); // Clear suggestions after selection
  };

  return (
    <header>
      <div className="nav">
        <Link to="/" className="store-title">
          <img
            src={logo || require("../assets/images/trolley.png")}
            alt="Company Logo"
            className="logo"
          />
          <h1>{companyName}</h1>
        </Link>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search for products"
          />
          {filteredProducts.length > 0 && (
            <ul className="autocomplete-list">
              {filteredProducts.map((product, index) => (
                <li
                  key={index}
                  onClick={() => handleProductSelect(product)}
                  className={
                    searchQuery.toLowerCase() === product.toLowerCase()
                      ? "highlight"
                      : ""
                  }
                >
                  {product}
                </li>
              ))}
            </ul>
          )}
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-icon">
            <img
              src={trolleyImage}
              alt="Shopping Cart"
              className="trolley-icon"
            />
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
      <div className="company-info">
        <p>{companyAddress}</p>
        <p>{companyEmail}</p>
      </div>
    </header>
  );
}

export default Header;
