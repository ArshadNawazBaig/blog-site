import React from "react";
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { Navbar, Link } from "./style";
import Logo from './../../assets/logo.png'
export const NavbarCom = () => {
  return (
    <>
      <Navbar color="light" expand="md">
        <NavbarBrand to="/">
          <img src={Logo} />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link to="/components/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/components/">Sports</Link>
            </NavItem>
            <NavItem>
              <Link to="/components/">Pakistan</Link>
            </NavItem>
            <NavItem>
              <Link to="/components/">Calture</Link>
            </NavItem>
            <NavItem>
              <Link to="/components/">Trending</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
