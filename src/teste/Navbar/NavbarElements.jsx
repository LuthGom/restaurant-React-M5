import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  grid-area: header;
  background: #fdc844;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.img`
  cursor: pointer;
  margin-left: 24px;
  height: 80px;
  width: 80px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: black;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);

    svg {
      width: 1.8em;
      height: 1.8em;
      cursor: pointer;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const CartWrapper = styled.div`
  position: relative;
  background: #ff2351;
  width: 50px;
  height: 50px;
  margin-left: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    height: 28px;
    width: 28px;
    color: black;
  }

  @media screen and (max-width: 768px) {
    margin: 7px;
    width: 50px;
    height: 50px;

    svg {
      height: 22px;
      width: 22px;
    }
  }
`;

export const SpanCountCart = styled.span`
  position: absolute;
  inset: 22px 0 0 26px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #e5e5e5;
  color: black;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    inset: 24px 0 0 26px;
  }
`;
