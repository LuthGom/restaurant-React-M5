import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #e5e5e5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-areas:
    "header header"
    "sideMenu menu"
    "footer footer";
  grid-template-columns: 130px auto;
  grid-template-rows: 80px auto auto;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "header"
      "sideMenu"
      "menu"
      "footer";
    grid-template-columns: auto;
    grid-template-rows: 80px auto auto auto;
  }

  @media screen and (max-width: 480px) {
    background: #fff;
  }
`;
