import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  total: null,
});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
    );
  }, [cartItems]);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  /**
   *
   * @param item item to remove from cart
   * @returns Filtered cart items
   */
  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const increaseQuantity = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems(
      // neco jako flat white ale lepsi, lol
      cartItems.flatMap((cartItem) => {
        if (cartItem.id === item.id) {
          if (cartItem.quantity === 1) {
            return [];
          } else {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
        } else {
          return cartItem;
        }
      })
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
