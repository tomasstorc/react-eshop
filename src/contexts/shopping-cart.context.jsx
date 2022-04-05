import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ShoppingCartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
