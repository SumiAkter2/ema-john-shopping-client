import React from "react";

const Order = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.01).toFixed(1));
  const grandTotal = total + shipping + tax;
  console.log(total);

  return (
    <div className="cart-container">
      <h1>Order Summary</h1>
      <h3>Selected Items: {cart.length}</h3>
      <h3> shipping charge : ${shipping}</h3>
      <h3>Sub total : ${total} </h3>
      <h3>Tax: ${tax} </h3>
      <h3>Grand total : ${grandTotal} </h3>
    </div>
  );
};

export default Order;
