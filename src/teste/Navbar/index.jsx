import React from "react";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "./../../assets/images/logo.png";
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

const Navbar = ({ toggle, countCartItems}) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLinks to="/">
            <NavLogo src={Logo} />
          </NavLinks>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/menu">Cardápio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/login">Login</NavLinks>
            </NavItem>
            <CartWrapper>
              <FiShoppingCart />
              <SpanCountCart>{countCartItems}</SpanCountCart>
            </CartWrapper>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
