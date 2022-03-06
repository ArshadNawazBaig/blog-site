import React, { useEffect, useState } from "react";
import { data } from "./data";
import {
  SidebarItem,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarBrand,
} from "./style";
import Logo from "./../../../assets/logo.png";
import { useLocation, useParams } from "react-router-dom";
export const Sidebar = () => {
  const { pathname } = useLocation();
  const joinPath = pathname.split("/").join("");
  const [active, setActive] = useState(false);
  const handleActive = (title) => {
    const titleLow = title.toLowerCase();
    setActive(titleLow);
  };

  useEffect(() => {
    handleActive(joinPath);
  }, []);
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarBrand>
          <SidebarLink to="/">
            <SidebarItem className="brand-link">
              <img src={Logo} />
            </SidebarItem>
          </SidebarLink>
        </SidebarBrand>
        {data.map((item, index) => (
          <SidebarLink to={item.link} key={index}>
            <SidebarItem
              onClick={() => handleActive(item.title)}
              className={active === item.title.toLowerCase() ? "active" : ""}
            >
              {item.icon} {item.title}
            </SidebarItem>
          </SidebarLink>
        ))}
      </SidebarMenu>
    </SidebarWrapper>
  );
};
