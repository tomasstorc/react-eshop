import { useEffect, useState, createContext } from "react";

import PRODUCT_DATA from "../shop-data.json";
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(PRODUCT_DATA);
  }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
