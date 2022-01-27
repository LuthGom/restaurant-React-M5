import React from "react";
import { ButtonLink } from "./ButtonElements";

const Button = ({ to, textBtn }) => {
  return (
    <>
      <ButtonLink to={to}>{textBtn}</ButtonLink>
    </>
  );
};

export default Button;
