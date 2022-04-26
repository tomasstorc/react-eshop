import { useContext } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { removeItemFromCart } = useContext(ShoppingCartContext);
  return (
    <div>
      {name}
      <ChevronLeftIcon className="quan" /> {quantity}{" "}
      <ChevronRightIcon className="quan" /> x {price}
      <ClearIcon className="icon" onClick={() => removeItemFromCart(item)} />
    </div>
  );
};

export default CheckoutItem;
