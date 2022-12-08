import React from "react";
import Logo from "../logo/logo";
import securePay from "../../assets/icons/secure-pay.svg";
import "./header2.css";

const Header2 = () => {
  return (
    <div className="container-lg">
      <div className="main-content">
        <div className="left-part">
          <Logo />
        </div>
        <div className="right-part">
          <img src={securePay} alt="secure" className="header-left-img" />
          <span className="mx-2 header-left-text">100 % Secure Transaction</span>
        </div>
      </div>
    </div>
  );
};
export default Header2;
