import React from "react";

const ProductPage = ({ match }) => {
  const productId = match.params.id;

  return (
    <div>
      <h1>Product Details for {productId}</h1>
      {/* Add logic to fetch and display product details */}
    </div>
  );
};

export default ProductPage;
