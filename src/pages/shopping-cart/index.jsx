import React from "react";
import FooterBottom2 from "../../common/components/footer-bottom-2";
import Header2 from "../../common/components/header2";
import "./shoppingCart.css";
import Bullet1 from "../../common/assets/icons/bullet1";
import Bullet2 from "../../common/assets/icons/bullet2";
import Bullet3 from "../../common/assets/icons/bullet3";
import CartItem from "./components/cart-item";
import ApplyCoupon from "../../common/components/apply-coupon";
import { useNavigate } from "react-router-dom";
import BillSection from "../../common/components/bill-section";

const ShoppingCart = () => {
  let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
  const totalPrice = cart.map((item)=>{return item.currentPrice.slice(1)})
  const navigate = useNavigate();
  const gotoAddress = () => {
    navigate("/cart/select-address");
  };

   function handleClick()
   {
    navigate('/cart/select-address/');
   }
  return (
    <div className="main-cart ">
      <Header2 />
      <div className="main-cart-body ">
        <div className="container d-flex justify-content-center">
          <div className="cart-body-left-part mx-2">
            <div className="process-bar">
              <div>
                <Bullet1 />
                <span className="process-bar-title mx-2">Shopping Cart</span>
              </div>
              <div className="mx-2">
                <hr className="dashed-line"></hr>
              </div>
              <div className="mx-2 blur-color">
                <Bullet2 />
                <span className="process-bar-title mx-2">Select Address</span>
              </div>
              <div className="mx-2 blur-color">
                <hr className="dashed-line"></hr>
              </div>
              <div className="mx-2 blur-color">
                <Bullet3 />
                <span className="process-bar-title mx-2">Payment</span>
              </div>
            </div>

            <div className="d-flex align-items-start mx-4">
              <span className="Shopping-cart-heading mx-1">Shopping Cart</span>
            </div>

            <div className="cart-item mx-4 mt-5 ">
            {(cart.length >0)? cart.map((cartitem, index) => {
                return <CartItem details={cartitem} key={index} />;
              }): <p>Your Cart is empty!</p>}
            
            </div>
          </div>
          <div className="cart-body-right-part mx-2">
            <ApplyCoupon />

           {(cart.length >0)? <BillSection price={totalPrice} others={{btnName:"Buy Now",onclickfn:handleClick}} />:''}
          </div>
        </div>
      </div>
      <div>
        <FooterBottom2 />
      </div>
    </div>
  );
};

export default ShoppingCart;
