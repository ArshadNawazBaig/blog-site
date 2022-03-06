import styled from "styled-components";
import { Link as Tag } from "react-router-dom";
export const SidebarWrapper = styled.div`
  width: 300px;
  padding: 0 20px;
`;

export const SidebarMenu = styled.div``;

export const SidebarItem = styled.div`
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 10px;
  font: normal 400 16px Jost;
  background: #fff;
  transition: ease-in-out all 0.5s;
  & svg {
    margin-right: 20px;
  }
  &:hover {
    background: #7b67de;
    color: #fff;
  }
  &.active {
    background: #7b67de;
    color: #fff;
  }
`;

export const SidebarLink = styled(Tag)`
  color: #727998;
  text-decoration: none;
  width: 100%;
  & .brand-link {
    padding-left: 0 !important;
  }
  & img {
    width: 150px;
  }
`;

export const SidebarBrand = styled.div`
  & .brand-link:hover {
    background: transparent !important;
  }
`;
