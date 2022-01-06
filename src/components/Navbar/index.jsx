import React from "react";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  CartWrapper,
  SpanCountCart,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>Cardápio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Sobre nós</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contato</NavLinks>
            </NavItem>
            <CartWrapper>
              <FiShoppingCart />
              <SpanCountCart></SpanCountCart>
            </CartWrapper>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
