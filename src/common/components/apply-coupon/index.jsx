import React from "react";
import OffersIcon from "../../assets/icons/offers";
import "./apply-coupon.css";

const ApplyCoupon = () => {
  return (
    <div className="apply-coupon-main px-3">
      <h3 className="apply-coupon-heading">Apply Coupon</h3>
      <div className="input-group mb-3 px-4 coupon-field">
      <span className="offer"> <OffersIcon color="#21C17A" height="20" width="20" /> </span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span className="pink-text">Apply</span>
      </div>
    </div>
  );
};

export default ApplyCoupon;
