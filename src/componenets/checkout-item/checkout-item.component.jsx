import { useContext } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);
  return (
    <div>
      <img src={imageUrl} alt="" />
      {name}
      <ChevronLeftIcon
        className="quan"
        onClick={() => decreaseQuantity(item)}
      />{" "}
      {quantity}{" "}
      <ChevronRightIcon
        className="quan"
        onClick={() => increaseQuantity(item)}
      />{" "}
      x {price}
      <ClearIcon className="icon" onClick={() => removeItemFromCart(item)} />
    </div>
  );
};

export default CheckoutItem;
