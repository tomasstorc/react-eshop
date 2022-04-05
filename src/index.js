import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { ShoppingCartProvider } from "./contexts/shopping-cart.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
