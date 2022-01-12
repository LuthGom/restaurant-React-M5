import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }
  body{
    background: #e5e5e5;
    @media screen and (max-width: 801px) {
    background: #fff;
  }
  }
`;

export const HomeContainer = styled.div`
  background: #e5e5e5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-areas:
    "header header header"
    "sideMenu menu cart"
    "footer footer footer";
  grid-template-columns: 130px auto 600px;
  grid-template-rows: 80px auto auto;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "header"
      "sideMenu"
      "cart"
      "menu"
      "footer";
    grid-template-columns: auto;
    grid-template-rows: 80px auto auto auto auto;
  }

  @media screen and (max-width: 480px) {
    background: #fff;
  }
`;
