import React from "react";
import "./payment.css";
import Header2 from "../../common/components/header2";
import FooterBottom2 from "../../common/components/footer-bottom-2";
import checkIcon from "../../common/assets/icons/check.svg";
import Bullet3 from "../../common/assets/icons/bullet3";
import ApplyCoupon from "../../common/components/apply-coupon";
import BillSection from "../../common/components/bill-section";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const cartdata = localStorage.getItem("cartdata");
  const MycartItem = JSON.parse(cartdata);
  const address = localStorage.getItem("address");
  const DeliveryAdd = JSON.parse(address);

  const navigate = useNavigate();
  const gotoPlaceOrder = () => {
    navigate("/cart/select-address/payment/order-placed/");
  };

  return (
    <div>
      <Header2 />
      <div className="payment-body-main">
        <div className="container d-flex justify-content-between">
          <div className="payment-left">
            <div className="process-bar">
              <div>
                <img
                  src={checkIcon}
                  alt="check icon"
                  style={{ height: "18px", width: "18px" }}
                />
                <span className="process-bar-title mx-2">Shopping Cart</span>
              </div>
              <div className="mx-2">
                <hr className="dashed-line"></hr>
              </div>
              <div className="mx-2 ">
                <img
                  src={checkIcon}
                  alt="check icon"
                  style={{ height: "18px", width: "18px" }}
                />
                <span className="process-bar-title mx-2">Select Address</span>
              </div>
              <div className="mx-2 ">
                <hr className="dashed-line"></hr>
              </div>
              <div className="mx-2 ">
                <Bullet3 />
                <span className="process-bar-title mx-2">Payment</span>
              </div>
            </div>

            <div className="d-flex mx-4 my-3">
              <h5 className="payment-heading">Payment Mode</h5>
            </div>
            <div className="form-check d-flex mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="addressDefault"
                defaultChecked={true}
              />
              <label className="form-check-label" htmlFor="addressRadio">
                Cash on delivery
              </label>
            </div>
          </div>
          <div className="payment-right">
            <div className="address-bar">
              <div className="d-flex justify-content-between">
                <h5 className="delivery-address-heading mt-2 px-3">Address</h5>
                <span className="mt-2 px-3 pink-text">Apply</span>
              </div>
              <div>
                <h6 className="d-flex px-3">{DeliveryAdd[0]}</h6>
                <p className="mt-1 text-start mx-3">{DeliveryAdd[1]}</p>
              </div>
            </div>
            <ApplyCoupon />
            <BillSection
              price={MycartItem.currentPrice}
              btnname="Place order"
              onclickfn={gotoPlaceOrder}
            />
          </div>
        </div>
      </div>
      <FooterBottom2 />
    </div>
  );
};

export default Payment;
