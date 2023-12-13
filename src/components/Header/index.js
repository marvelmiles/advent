import React, { useState } from "react";
import { Navbar, Nav, Collapse, NavItem, NavLink } from "reactstrap";
import BrandLogo from "../BrandLogo";
import "./index.css";

const Header = props => {
  const [isOpen, setIsopen] = useState(false);

  const toggleCollapse = () => {
    setIsopen(!isOpen);
  };

  return (
    <Navbar expand="sm" id="navbar" className="fixed-top nav-top">
      <BrandLogo />
      <button
        className="d-block d-sm-none navbar-toggler"
        onClick={toggleCollapse}
        data-toggle="collapse"
        data-target="nav-collapse"
      >
        <span className="sr-only">Toggle Navigation</span>
        <i className="fas fa-bars"></i>
      </button>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="text-capitalize ml-auto" id="nav-collapse" navbar>
          <NavItem>
            <NavLink
              href="#product"
              className="text-muted mx-2 text-capitalize"
              onClick={toggleCollapse}
            >
              Product
            </NavLink>{" "}
          </NavItem>
          <NavItem>
            <NavLink
              href="#features"
              className="text-muted mx-2 text-capitalize"
              onClick={toggleCollapse}
            >
              features
            </NavLink>{" "}
          </NavItem>
          <NavItem>
            <NavLink
              href="#testimonial"
              className="text-muted mx-2 text-capitalize"
              onClick={toggleCollapse}
            >
              reviews
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#pricing"
              className="text-muted mx-2 text-capitalize"
              onClick={toggleCollapse}
            >
              {" "}
              pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#contact"
              className="text-muted mx-2 text-capitalize"
              onClick={toggleCollapse}
            >
              contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
