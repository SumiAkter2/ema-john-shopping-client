import React, { useEffect, useState } from "react";
import Products from "./Products";
import "./Css/Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((p) => (
          <Products
            key={products.id}
            p={p}
            // handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        {/* <p>Selected Items: {cart.length}</p> */}
      </div>
    </div>
  );
};

export default Shop;
