import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle}>
            Cardapio
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            Franquias
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            não sei
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            teste
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
