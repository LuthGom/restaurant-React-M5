import React from "react";

import styled from "styled-components";
const Input = styled.input`
  width: 20px;
  height: 20px;
  margin-top: .5em;


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



function Radio({etiqueta, checked, name, value, onChange}) {
  return (
    <div>
      <Input type="radio" name={name} value={value} defaultChecked={checked} onChange={onChange}/>

      <Label>{etiqueta}</Label>
    </div>
  );
}

export default Radio;
