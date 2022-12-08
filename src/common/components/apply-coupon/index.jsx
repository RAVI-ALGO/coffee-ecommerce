import React from "react";
import OffersIcon from "../../assets/icons/offers";
import "./apply-coupon.css";

const ApplyCoupon = () => {
  return (
    <div className="apply-coupon-main px-3">
      <h3 className="apply-coupon-heading">Apply Coupon</h3>
      <div className="input-group mb-3 px-2 coupon-field-main">
      <span className="offer"> <OffersIcon color="#21C17A" height="20" width="20" /> </span>
        <input
          type="text"
          className="form-control coupon-field"
          aria-label="Amount (to the nearest dollar)"
          placeholder="Enter Coupon Code"
        />
        <button className="btn pink-text apply-btn">Apply</button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
