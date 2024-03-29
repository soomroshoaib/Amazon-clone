import React from "react";
import "./header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./../../StateProvider";

import { Link } from "react-router-dom";
import { auth } from './../../firebase';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
   
  const handleAuthentication = () => {
  if(user) {
    auth.signOut()
  }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="header-logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          {/* { user?.email || "Guest" } */}
          <div 
          onClick={handleAuthentication}
          className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest': user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Return's</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
