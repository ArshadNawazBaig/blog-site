import styled from "styled-components";
import { Navbar as Nav } from "reactstrap";
import { Link as NavLink } from "react-router-dom";

export const Navbar = styled(Nav)`
  border-bottom: 1px solid #e9e9e9;
`;

export const Link = styled(NavLink)`
  border: medium none !important;
  color: #000000 !important;
  display: block !important;
  font: normal 700 14px "Jost";
  margin-right: 25px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 40px;
`;
