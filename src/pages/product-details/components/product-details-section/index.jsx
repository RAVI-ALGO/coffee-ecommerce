import React, { useEffect,useState } from "react";
import "./product-details-section.css";
import Form from "react-bootstrap/Form";
import CartIcon from "../../../../common/assets/icons/cart.jsx";
import checkIcon from "../../../../common/assets/icons/check.svg";
import truckIcon from "../../../../common/assets/icons/truck.svg";
import returnIcon from "../../../../common/assets/icons/return.svg";
import cancleIcon from "../../../../common/assets/icons/cancle.svg";
import emiIcon from "../../../../common/assets/icons/emi-icon.svg";
import ColorPicker from "../color-picker";
import OffersIcon from "../../../../common/assets/icons/offers";
const ProductDetailsSection = (props) => {

  const {ProductDetails} = props;
  console.log(ProductDetails);
  const { name, currentPrice, originalPrice, offer, emi, discount ,id,availableColor=[],features=[]} = ProductDetails;
  const AvailableColors=[{colorValue:"red",colorName:"Red"},{colorValue:"black",colorName:"Black"},{colorValue:"blue",colorName:"Blue"} ,{colorValue:"gold",colorName:"Gold"}];
  const [selectedColor,setcolor] = useState(0);
  
  return (
    <div className="main-details-section">
      <h1 className="product-title gap">
        {name}
      </h1>
      <div className="specifications gap">
        <p className="features-title">key Features</p>
        <ul>
        {features.map((allfeatures,index) =>{
              return(<li key={index}>
            <img src={checkIcon} alt="check icon" />
            <span className="mx-2">
              {allfeatures}
            </span>
          </li>);
        })}
        </ul>
      </div>
      
      <div className="color-picker-main gap">
        <p className="color-picker-title">Chose Color</p>
        <div className="d-flex align-items-center justify-space-between">
        {availableColor.map((color,index) => {
          const {colorValue,colorName} =color;
          return(<ColorPicker key={index} color={colorValue} name={colorName} active ={selectedColor === index ? "true" : ""}  clickfun={() => {setcolor(index)}} 
           />);
        })}
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
        <div className="current-price">{currentPrice}</div>
        <div className="org-price">{originalPrice}</div>
        <div className="discount">{discount}</div>
      </div>
      <div className="bottom-part my-1">Inclusive of all taxes</div>
      <div className="other-details gap">
        <div className="my-2">
        <img src={emiIcon} alt="emi icon" />
          <span className="mx-2">
          No cost {emi}/month. Standard EMI also available. T&C
          </span>
        </div>
        <div className="my-2">
        <OffersIcon color="black" height="16" width="16" />
          <span className="mx-2">
          Bank Offer {offer} on Flipkart Axs Bank Credit Card.
            T&C
          </span>
        </div>
      </div>
      <div className="add-to-cart gap ">
        <button className="add-to-cart-btn btn btn-lg d-flex align-items-center ">
        <CartIcon color="white" /><span className="mx-2"> Add to Cart</span>
        </button>
      </div>
      <div className="quick-policies d-flex justify-space-between align-items-center mt-4">
        <div className="d-flex align-items-start ">
          <img src={truckIcon} alt="truck icon" />
          <div className="mx-2">
            <span className="quick-policy-title1">Shipping Fee</span>
            <div className="policy-value">FREE</div>
          </div>
        </div>
        <div className="d-flex align-items-start mx-3">
          <img src={returnIcon} alt="return icon" />
          <div className="mx-2">
            <span className="quick-policy-title1">Return Policy</span>
            <div className="policy-value">30 DAYS</div>
          </div>
        </div>
        <div className="d-flex align-items-start  mx-3">
          <img src={cancleIcon} alt="cancellation icon" />
          <div className="mx-2">
            <span className="quick-policy-title1">Cancellation</span>
            <div className="policy-value">ALLOWED</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsSection;
