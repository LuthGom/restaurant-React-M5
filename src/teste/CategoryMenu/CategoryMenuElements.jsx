import styled from "styled-components";

export const CategoryMenuContainer = styled.div`
  grid-area: sideMenu;
  width: 130px;
  min-width: 130px;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 800px;
    margin: auto;
    height: fit-content;
  }
`;

export const CategoryMenuWrapper = styled.ul`
  list-style: none;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin: 20px;
    overflow: scroll;
  }

  @media screen and (max-width: 480px) {
    justify-content: unset;
  }
`;

export const CategoryCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  cursor: pointer;

  &.active {
    background: #fdc844;
    border-radius: 8px;

    p {
      color: black;
    }

    svg {
      path {
        fill: black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 90px;
  }
`;

export const Icon = styled.i`
  svg {
    path {
      fill: #848484;
    }
  }
`;

export const CategoryTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #848484;
`;
