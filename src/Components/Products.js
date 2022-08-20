import React from "react";
import "./Css/Product.css";
const Products = ({ p, addToCart }) => {
  return (
    <div className="product-container">
      <img src={p.img} alt="" />
      <h4>{p.name}</h4>
      <h4>Category: {p.category} </h4>
      <h3> ${p.price} </h3>

      <button onClick={addToCart} className="btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Products;
