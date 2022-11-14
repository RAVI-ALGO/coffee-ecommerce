import React from "react";
import "./footer-top.css";

import {paymenticons} from "./constants/paymenticons.js";
const FooterTop = () => {
  return (
    <div className="footer-top-main">
      <div className="container">
        <div className="row">
          {paymenticons.map((feature) => {
            return (
              <div className="col-lg-3 feature-container" key={feature.title}>
                <div>
                  <img  src={feature.icon} alt="payment icon" className="feature-img" />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-subtitle">{feature.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
