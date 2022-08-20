import React from "react";

const Order = ({ cart }) => {
  return (
    <div className="product-order">
      <h1>Order Summary</h1>
      <h3>Selected Items: {cart.length}</h3>
      <h3>Total shipping charge : $</h3>
      <h3>Sub total : $ </h3>
      <h3>Tax: $ </h3>
      <h3>Grand total : $ </h3>
    </div>
  );
};

export default Order;
