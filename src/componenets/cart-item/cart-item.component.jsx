import React from "react";

const CartComponent = ({ cartItem }) => {
  const { name, quanity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quanity}</span>
    </div>
  );
};

export default CartComponent;
