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
  width: 300px;
  height: 24px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: black;
`;
function Text({disabled,contentEditable,etiqueta,type, name, placeholder, value, handleOnChange, autocomplete}) {
  return (
    <>
      <Label htmlFor={name}>{etiqueta}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        autoComplete={autocomplete}
        contentEditable={contentEditable}
        disabled={disabled}
      />
    </>
  );
}

export default Text;
