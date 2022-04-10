import { useContext } from "react";

import Button from "../button/button.component";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(ShoppingCartContext);
  const { name, price, imageUrl } = product;

  const handleClick = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleClick}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
