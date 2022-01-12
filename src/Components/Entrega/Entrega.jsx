import React from "react";
import Motoboy from "./motoboy.gif";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
`;
const DivItem = styled.div`
  box-shadow: -10px -10px 10px black, 10px 10px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  background-color: red;
`;
function Entrega() {
  return (
    <Container>
      <DivItem>
        <h1>Seu pedido está sendo preparado e logo sairá para entrega!</h1>
        <img
          src={Motoboy}
          alt="Gif de mobotoy em uma motinha amarela com roupa preta!'"
        />
      </DivItem>
    </Container>
  );
}

export default Entrega;
