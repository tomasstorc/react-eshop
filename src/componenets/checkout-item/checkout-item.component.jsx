import React from "react";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div>
      <h2>{name}</h2>
      {quantity} x {price}
    </div>
  );
};

export default CheckoutItem;
