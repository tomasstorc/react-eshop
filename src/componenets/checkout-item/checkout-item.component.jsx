import { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => decreaseQuantity(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => increaseQuantity(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => removeItemFromCart(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
