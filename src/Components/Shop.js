import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="App">
      <h1>Happy Shooooooping</h1>
      <h1>{products.length} </h1>
      {/* {
              products.map(p=><)
          } */}
    </div>
  );
};

export default Shop;
