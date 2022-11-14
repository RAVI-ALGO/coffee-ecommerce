import React from "react";
import "./footer-bottom.css";
import { footerlinks } from "./constants/footerlinks";
import PaymentIcons from "../../assets/icons/payment-icons.svg";
import AppDownload from "../../assets/icons/app-download.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
const FooterBottom = () => {
  return (
    <div className="footer-bottom-main">
      <div className="container">
        <div className="row">
          <div className="left-main col-md-9">
            <div className="left-top">
              <div className="row">
                {footerlinks.map((footerlinks,index) => {
                  return (
                    <div className="col-md-3" key={index}>
                      <h2 className="footer-list-heading">
                        {footerlinks.heading}
                      </h2>
                      <ul>
                        {footerlinks.links.map((link,index) => {
                          return (
                            <li className="footer-list-item" key={index}>
                              <a href="#/" className="footer-item-link">
                                {link}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="left-bottom">
              <img src={PaymentIcons} alt="all payment icons" />
            </div>
          </div>
          <div className="right-main col-md-3">
            <div className="right-top">
              <h3 className="footer-right-subheading">
                Download our amazing app
              </h3>
              <div className="footer-right-icons">
                <img src={AppDownload} alt="download apps" />
              </div>
            </div>
            <div className='right-bottom'>
                            <h3 className='footer-right-subheading'>
                                Connect us on
                            </h3>
                            <div className='footer-right-icons'>
                                <img src={Facebook} alt='Facebook icon' />
                                <img src={Twitter} alt='Twitter icon' />
                                <img src={Youtube} alt='Youtube icon' />
                                <img src={Instagram} alt='Instagram icon' />
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
