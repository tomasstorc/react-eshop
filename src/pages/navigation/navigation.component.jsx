import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutAuth } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutAuth();
  };
  console.log(currentUser);
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
