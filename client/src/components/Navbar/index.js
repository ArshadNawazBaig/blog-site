import React from "react";
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Navbar, Link } from "./style";
import Logo from "./../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import { setMessageAction } from "../../redux/actions/messageActions";
export const NavbarCom = () => {
  const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const logout = () => {
    console.log('logout')
    dispatch(logoutAction());
    localStorage.removeItem("user");
    dispatch(setMessageAction("Logout successfully."))
  };
  return (
    <>
      <Navbar color="light" expand="md" light>
        <NavbarBrand to="/">
          <img src={Logo} />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto align-items-center" navbar>
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
              <Link to="/components/" className="me-2">
                Trending
              </Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav className="ps-0">
              <DropdownToggle nav>
                <img className="user-img" src={Logo} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>{auth.username}</DropdownItem>
                <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
