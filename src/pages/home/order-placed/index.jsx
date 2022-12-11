import React from "react";
import ApplyCoupon from "../../../common/components/apply-coupon";
import BillSection from "../../../common/components/bill-section";
import FooterBottom2 from "../../../common/components/footer-bottom-2";
import Header2 from "../../../common/components/header2";
import checkIcon from "../../../common/assets/icons/check.svg";
import "./order-placed.css";
import { useNavigate } from "react-router-dom";

const OrederPlace = () => {
  const cartdata = localStorage.getItem("cartdata");
  const MycartItem = JSON.parse(cartdata);
  const address = localStorage.getItem("address");
  const DeliveryAdd = JSON.parse(address);
  const d = new Date();
  const date =d.toLocaleDateString();
  const navigate =useNavigate();
  const gotoproduct = () =>{
      navigate("/products");
  }
  return (
    <div>
      <Header2 />
      <div className="order-placed-main">
        <div className="container d-flex justify-content-between">
          <div className="order-place-left">
            <div className="d-flex mx-5 mt-5">
              <img src={checkIcon} alt="check-icon" className="checkimg" />
            </div>
            <div className="mx-5">
              <span className=" mt-2 d-flex greeting">Congratulation!!!</span>
            </div>
            <div className="mx-5">
              <h3 className=" mt-2 d-flex">Order Place Successfully</h3>
              <div className="order-details d-flex align-content-center">
                <span className="">Order No. {Math.floor(Math.random() * 1000000000)}</span>
                <span className="dot my-auto mx-2"></span>
                <span className=""> Date {date}</span>
                <span className="dot my-auto mx-2"></span>
                <span className=""> Cash on Delivery</span>
              </div>
            </div>
            <div className="mx-5">
              <div className="mt-4 d-flex">
                <span>1 item</span>
              </div>
              <div>
                {[MycartItem].map((item, index) => {
                  return (
                    <div key={index} className="mt-3 d-flex w-50">
                      <div className="ordered-item-thumnail">
                        <img
                          src={item.imageFile[0]}
                          alt="item-image"
                          className="ordered-item-thumnail-image"
                        />
                      </div>
                      <div className="ordered-item-details mx-4">
                        <div className="ordered-item-name">{item.name}</div>
                        <div className="ordered-item-price">
                          {item.currentPrice}
                        </div>
                        <div className="text-start">Inclusive of all taxes</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex mt-5"><button className=" continue-shopping-btn btn btn-lg" onClick={gotoproduct} >Continue Shopping</button></div>
            </div>
          </div>
          <div className="order-place-right">
            <div className="delivery-address">
              <h6 className="delivery-address-heading px-3 pt-3">Deliver to</h6>
              <div className="mt-2">
                <h6 className="d-flex px-3">{DeliveryAdd[0]}</h6>
                <p className="mt-1 text-start mx-3">{DeliveryAdd[1]}</p>
              </div>
            </div>

            <BillSection price={MycartItem.currentPrice} visiblity="none" />
          </div>
        </div>
      </div>
      <FooterBottom2 />
    </div>
  );
};

export default OrederPlace;
