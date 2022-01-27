import React from "react";
import Motoboy from "./motoboy.gif";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  grid-area: menu;
`;
const DivItem = styled.div`
  box-shadow: -10px -10px 10px black, 10px 10px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  h1{
    text-align: center;
    margin-top: 1em;
  }
  @media (min-width: 500px) {
    styled.div{
      /* height: none; */
    }
    
    h1{
      text-align: center;
      margin: 0 3em 0 3em;
    }
  }
`;
function Entrega() {
  return (
    <Container>
      <DivItem>
        <h1>Seu pedido está sendo preparado e logo sairá para entrega! Gratidão pela preferência! ❤🌈</h1>
        <img
          src={Motoboy}
          alt="Gif de mobotoy em uma motinha amarela com roupa preta!'"
        />
      </DivItem>
    </Container>
  );
}

export default Entrega;
