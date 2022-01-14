import React from "react";
import styled from "styled-components";
const P = styled.p`
  width: 137px;
  height: 27px;
  right: 215px;
  top: 125px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;

  color: #000000;
`;



function Paragrafo({paragrafo}) {
  return <P>{paragrafo}</P>;
}

export default Paragrafo
