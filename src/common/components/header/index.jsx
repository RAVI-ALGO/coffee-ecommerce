import React from "react";
import "./header.css";
import cartIcon from "../../assets/icons/cart.svg";
 import userIcon from "../../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/logo";

const Header = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };
  const goToSignpPage = () =>{
    navigate("/register");
  }
  return (
    <div className="container-lg">
      <div className="main-content">
        <div className="left-part">
          <Logo />

          <div className="input-group mx-4">
            <input
              type="text"
              className="form-control custom-width"
              placeholder="Search for  product, brands or more…"
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
        <div className="right-part">
          <div className="header-icons">
            <img src={cartIcon} alt="cart icon" />
            <span className="header-text mx-2">Cart</span>
          </div>
          <div className="header-icons marginLeft20">
            <img src={userIcon} alt="user icon" />
            <span className="header-text mx-2" name="headerloginLink" onClick={goToLoginPage}>Login /</span><span className="header-text" onClick={goToSignpPage}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
