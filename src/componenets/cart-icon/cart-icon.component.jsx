import "./cart-icon.styles.scss";

import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
