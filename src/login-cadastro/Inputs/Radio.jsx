import React from "react";

import styled from "styled-components";
const Input = styled.input`
  width: 20px;
  height: 20px;
  left: 22px;
  top: 455px;

  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;

`;

const Label = styled.label`
  width: 100px;
  height: 24px;
  left: 54px;
  top: 453px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */


  color: #848484
`;

const Div = styled.div`
  display: flex;
`;

function Radio(props) {
  return (
    <Div>
      <Input type="radio" name="Radio" placeholder={props.placeholder} />

      <Label>{props.etiqueta}</Label>
    </Div>
  );
}

export default Radio;
