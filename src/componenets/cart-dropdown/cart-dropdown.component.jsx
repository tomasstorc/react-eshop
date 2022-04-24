import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className="center">No items</div>
        )}
      </div>
      <Link to="/checkout">
        <Button buttonType="inverted">GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
