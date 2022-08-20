import React from "react";
import "./Css/Product.css";
const Products = ({ p }) => {
  return (
    <div className="product-container">
      <img src={p.img} alt="" />
      <h4>{p.name}</h4>
      <h4>Category: {p.category} </h4>
      <h3> ${p.price} </h3>
      {/* <p>{p.shipping} </p> */}
      <button className="btn">Add To Cart</button>
    </div>
  );
};

export default Products;
