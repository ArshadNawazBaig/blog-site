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
import { useNavigate } from "react-router-dom";
export const NavbarCom = () => {
  const auth = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <Navbar color="light" expand="md" light>
        <NavbarBrand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={Logo} />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/categories/sports">Sports</Link>
            </NavItem>
            <NavItem>
              <Link to="/categories/pakistan">Pakistan</Link>
            </NavItem>
            <NavItem>
              <Link to="/categories/calture">Calture</Link>
            </NavItem>
            {auth && (
              <NavItem>
                <Link to="/post/add">Add Post</Link>
              </NavItem>
            )}
            <NavItem>
              <Link to="/categories/trending" className="me-2">
                Trending
              </Link>
            </NavItem>
            {auth && (
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
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
