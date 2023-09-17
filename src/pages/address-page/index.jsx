import React from "react";
import Bullet1 from "../../common/assets/icons/bullet1";
import ApplyCoupon from "../../common/components/apply-coupon";
// import BillSection from "../../common/components/bill-section";
import FooterBottom2 from "../../common/components/footer-bottom-2";
import Header2 from "../../common/components/header2";
import checkIcon from "../../common/assets/icons/check.svg";
import "./address.css";
import Bullet2 from "../../common/assets/icons/bullet2";
import Bullet3 from "../../common/assets/icons/bullet3";
import { useNavigate } from "react-router-dom";
import BillSection from "../../common/components/bill-section";

const AddressPage = () => {
  const cartdata = localStorage.getItem("cartdata");
  const MycartItem = JSON.parse(cartdata);
  const totalPrice = MycartItem.map((item)=>{return item.currentPrice.slice(1)})
  const navigate = useNavigate();

  const handleClick = () => {

    if(document.getElementById('flexRadioDefault1').checked) {
      const Name = document.getElementById('flexRadioDefault1').nextSibling.firstChild.innerHTML;
      const Address =  document.getElementById('flexRadioDefault1').nextSibling.lastChild.innerHTML;
      const completeAddress = [Name,Address];
      localStorage.setItem('address',JSON.stringify(completeAddress));

    }else if(document.getElementById('flexRadioDefault2').checked) {
      const Name = document.getElementById('flexRadioDefault2').nextSibling.firstChild.innerHTML;
      const Address =  document.getElementById('flexRadioDefault2').nextSibling.lastChild.innerHTML;
      const completeAddress = [Name,Address];
      localStorage.setItem('address',JSON.stringify(completeAddress));
    }

    navigate('/cart/select-address/payment/');
  };

 

  return (
    <div className="">
      <Header2 />
      <div className="address-page-main">
        <div className="container d-flex justify-content-center">
          <div className="address-body mx-2 mt-3">
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
            <div className="d-flex align-items-start justify-content-between mx-4">
              <h5 className="select-address-heading px-1">
                Select Delivery Address
              </h5>
              <a href="#" className="pink-text pt-2 add-address-link">
                Add New Address
              </a>
            </div>
            <div className="d-flex justify-content-between px-4 mt-3">
              <div
                className="saved-address form-check  par1"
                htmlFor="flexRadioDefault1"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked={true}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  <h6 className="address-name">Ravindra</h6>
                  <p className="address">
                    12/6,Road no 6,vijay Nagar Indore ,Madhya Predesh - 452010
                  </p>
                </label>
              </div>
              <div
                className="saved-address form-check"
                htmlFor="flexRadioDefault2"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  <h6 className="address-name">Praveen Tambe</h6>
                  <p className="address">
                  335/12,Sector 6,Mukharji Nagar Delhi ,India - 110009
                  </p>
                </label>
              </div>

            </div>

            <div className="card-body mt-2 pt-2">
              <h4 className="address-form mx-4 mt-3">
                or Create New Delivery Address
              </h4>
              <form>
                <div className="row mt-4 mx-3">
                  <div className="col">
                    <div className="form-floating">
                      <input type="text" id="" className="form-control" placeholder="Save Address as" />
                      <label className="form-label" htmlFor="">
                        Save Address as
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="number"
                        id="mobile"
                        className="lh-lg form-control"
                        placeholder="Mobile Number"
                      />
                      <label className="form-label" htmlFor="mobile">
                        Mobile Number
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 mx-3">
                  <div className="col">
                    <div className="form-floating">
                      <input type="text" id="add1" className="form-control" placeholder="Address 1" />
                      <label className="lh-lg form-label" htmlFor="add1">
                        Address 1
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        id="add2"
                        className="form-control"
                        placeholder="Address 2"
                      />
                      <label className="form-label" htmlFor="add2">
                        Address 2
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-1 mx-3">
                  <div className="col">
                    <div className="form-floating">
                      <input type="text" id="pincode" className="form-control" placeholder="Pincode" />
                      <label className="form-label" htmlFor="pincode">
                        Pincode
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        id="state"
                        className=" form-control"
                        placeholder="State"
                      />
                      <label className="form-label" htmlFor="state">
                       State
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 mx-3">
                  <div className="col-6 ">
                    <div className="form-floating">
                      <input type="text" id="city" className=" form-control" placeholder="City" />
                      <label className="form-label" htmlFor="city">
                        City
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-sm savebtn px-3 mx-4" >Deliver here</button>
              </form>
            </div>
          </div>
          <div className="address-body-left-part mx-3 my-3">
            <ApplyCoupon />
            {(MycartItem.length >0)? <BillSection price={totalPrice} others={{btnName:"Proceed to Payment",onclickfn:handleClick}} />:''}
            {/* <BillSection price={MycartItem.currentPrice}   btnname ="Proceed to Payment" onclickfn={gotoPayment} /> */}
          </div>
        </div>
      </div>
      <FooterBottom2 />
    </div>
  );
};

export default AddressPage;
