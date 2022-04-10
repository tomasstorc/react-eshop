import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quanity: cartItem.quanity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quanity: 1 }]);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ isOpen, setIsOpen, cartItems, addItemToCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
