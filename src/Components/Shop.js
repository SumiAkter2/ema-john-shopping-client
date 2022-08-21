import React, { useEffect, useState } from "react";
import Products from "./Products";
import "./Css/Shop.css";
import Order from "./Order";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((p) => (
          <Products key={products.id} p={p} addToCart={addToCart}></Products>
        ))}
      </div>
      <div className="product-order">
        <Order cart={cart}></Order>
      </div>
    </div>
  );
};

export default Shop;
