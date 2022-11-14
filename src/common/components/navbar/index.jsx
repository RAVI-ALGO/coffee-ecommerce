import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import offers from "../../assets/icons/offers.svg";
const NavbarMain = () => {
  return (
    <Navbar className="navbar-main" variant="dark">
      <Container>
        <div className="nav-main">
          <div className="left-part">
            <Nav className="me-auto">
              <Nav.Link href="#/samsung" className="custom-nav-link">
                Samsung
              </Nav.Link>
              <Nav.Link href="#/iphone" className="custom-nav-link">
                iPhone
              </Nav.Link>
              <Nav.Link href="#/Mi" className="custom-nav-link">
                Mi
              </Nav.Link>
              <Nav.Link href="#/oppo" className="custom-nav-link">
                Oppo
              </Nav.Link>
              <Nav.Link href="#/oneplus" className="custom-nav-link">
                Oneplus
              </Nav.Link>
              <Nav.Link href="#/vivo" className="custom-nav-link">
                Vivo
              </Nav.Link>
              <Nav.Link href="#/others" className="custom-nav-link">
                Others
              </Nav.Link>
            </Nav>
          </div>

          <div className="right-part">
            <div className="offers-text">
              <img src={offers} alt="offers icon" />
              <span className="mx-1">Offers</span>
            </div>
            <div>
              <button className="sub-btn py-1 px-3 mx-3">New</button>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
