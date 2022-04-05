import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import CartIcon from "../../componenets/cart-icon/cart-icon.component";
import CartDropdown from "../../componenets/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

import { signOutAuth } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(ShoppingCartContext);
  const signOutHandler = async () => {
    await signOutAuth();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <CartIcon />
          </div>
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
