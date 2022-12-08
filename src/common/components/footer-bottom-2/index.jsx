import React from "react";
import "./footer-bottom-2.css";
import PaymentIcons from "../../assets/icons/payment-icons.svg";

const FooterBottom2 = () => {
  return (
    <div className="footer-bottom-main h-50">
      <div className="container">
        <div className="left-main col-md-9">
          <div className="left-bottom">
            <img src={PaymentIcons} alt="all payment icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom2;
