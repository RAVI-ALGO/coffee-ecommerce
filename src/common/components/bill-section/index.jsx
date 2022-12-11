import React from "react";
import { useNavigate } from "react-router-dom";
import "./bill.css";

const BillSection = (props) => {
  const tex = "250";
  const price = props.price.slice(1);
  const total = parseInt(tex, 10) + parseInt(price);
  

  
  const navigate = useNavigate();
 
  return (
    <div className="cart-body-right-bottom my-2">
      <div className="mx-4">
        <h5 className="bill-heading py-3">Bill Details</h5>
      </div>
      <div className="invoice mx-4">
        <div className="item-list my-2">
          <span>Item Total</span>
          <span>₹ {price}</span>
        </div>
        <div className="item-list">
          <span>
            Taxes & Charges <i className="bi bi-exclamation-circle"></i>
          </span>
          <span> ₹{tex}</span>
        </div>
        <div>
          <hr style={{ borderTop: " dotted black 2px" }}></hr>
        </div>
        <div className="total py-2">
          <div>Total Amount</div>
          <div>₹ {total}</div>
        </div>
        <div className="my-2"  onClick={props.onclickfn}>
          <button style={{display:props.visiblity}} className="select-address-btn btn btn-lg">
            <span className="mx-2">{props.btnname}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillSection;
