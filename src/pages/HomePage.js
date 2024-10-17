import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../utils/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
