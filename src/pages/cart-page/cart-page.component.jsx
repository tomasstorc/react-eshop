import { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import CheckoutItem from "../../componenets/checkout-item/checkout-item.component";

import "./cart-page.styles.scss";

const CartPage = () => {
  const { cartItems, total } = useContext(ShoppingCartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <div className="center">No items</div>
      )}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default CartPage;
