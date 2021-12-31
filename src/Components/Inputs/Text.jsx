import React from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 328.34px;
  height: 47px;
  left: 21px;
  top: 214px;

  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 8px;

  ::placeholder {
    width: 131.56px;
    height: 24px;
    left: 29.29px;
    top: 226px;

    font-family:  "Poppins", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    padding-left: 0.5em;
    /* identical to box height */

    color: #848484;
  }
`;
const Label = styled.label`
  width: 238px;
  height: 24px;
  left: 54px;
  top: 453px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: black;
`;
function Text(props) {
  return (
    <>
      <Label>{props.etiqueta}</Label>
      <Input
        type="text"
        name="Text"
        id="Text"
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Text;
