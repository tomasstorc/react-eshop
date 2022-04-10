import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem cartItem={item} />)
        ) : (
          <div className="center">No items</div>
        )}
      </div>
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
