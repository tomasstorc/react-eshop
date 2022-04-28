import { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import CheckoutItem from "../../componenets/checkout-item/checkout-item.component";

const CartPage = () => {
  const { cartItems, total } = useContext(ShoppingCartContext);
  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <div className="center">No items</div>
      )}
      Total: {total}
    </div>
  );
};

export default CartPage;
