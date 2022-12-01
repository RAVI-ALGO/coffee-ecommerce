import React from "react";
import "./product-details-section.css";
import Form from "react-bootstrap/Form";
import carticon from "../../../../common/assets/icons/cart.svg";
import checkIcon from "../../../../common/assets/icons/check.svg";
import emiIcon from "../../../../common/assets/icons/emi-icon.svg";
import offers from "../../../../common/assets/icons/offers.svg";
import ColorPicker from "../color-picker";
const ProductDetailsSection = () => {
  return (
    <div className="main-details-section">
      <h1 className="product-title gap">
        Samsung Galaxy Note 8 (Orchid Grey, 6GB RAM, 64GB Storage)
      </h1>
      <div className="specifications gap">
        <p className="features-title">key Features</p>
        <ul>
          <li>
            <img src={checkIcon} alt="check icon" />
            <span className="mx-2">
              Capacity 6 kg :Suitable for bachelors & couples
            </span>
          </li>
          <li>
            <img src={checkIcon} alt="check icon" />
            <span className="mx-2">
              Warranty: 4 years on product, 4 years on motor
            </span>
          </li>
          <li>
            <img src={checkIcon} alt="check icon" />
            <span className="mx-2">
              800 rpm: Higher the spin speed, faster the drying time
            </span>
          </li>
          <li>
            <img src={checkIcon} alt="check icon" />
            <span className="mx-2">
              Capacity 6 kg :Suitable for bachelors & couples
            </span>
          </li>
        </ul>
      </div>
      <div className="color-picker-main gap">
        <p className="color-picker-title">Chose Color</p>
        <div className="d-flex align-items-center justify-space-between">
        <ColorPicker color="red" name="Red" active />
        <ColorPicker color="gold" name="Gold"/>
        <ColorPicker color="silver" name="Silver"/>
        <ColorPicker color="blue" name="Blue"/>
        </div>
      </div>
      <div className="gap d-flex">
        <label className="qnty-title my-auto">Select Qty.</label>
        <Form.Select
          aria-label="Select quantity"
          className="quantity-option gap"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </div>
      <div className="price-and-discounts">
        <div className="current-price">₹20,990</div>
        <div className="org-price">₹26000</div>
        <div className="discount">19%</div>
      </div>
      <div className="bottom-part my-1">Inclusive of all taxes</div>
      <div className="other-details gap">
        <div>
        <img src={emiIcon} alt="emi icon" />
          <span>
          No cost EMI ₹1,750/month. Standard EMI also available. T&C
          </span>
        </div>
        <div>
        <img src={offers} alt="offers icon" />
          <span>
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card.
            T&C
          </span>
        </div>
      </div>
      <div className="add-to-cart gap">
        <button className="add-to-cart btn btn-primary">
          <img src={carticon} alt="cart icon" /> Add to Cart
        </button>
      </div>
      <div className="quick-policies d-flex justify-space-between align-items-center gap">
        <div className="d-flex align-items-start ">
          <img src="c" alt="truck icon" />
          <div className="mx-2">
            <span>Shipping Fee</span>
            <div className="policy-value">FREE</div>
          </div>
        </div>
        <div className="d-flex align-items-start mx-3">
          <img src="c" alt="return icon" />
          <div className="mx-2">
            <span>Return Policy</span>
            <div className="policy-value">30 DAYS</div>
          </div>
        </div>
        <div className="d-flex align-items-start  mx-3">
          <img src="c" alt="cancellation icon" />
          <div className="mx-2">
            <span>Cancellation</span>
            <div className="policy-value">ALLOWED</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsSection;
