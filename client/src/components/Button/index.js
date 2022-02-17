import React from "react";
import { ButtonWrapper } from "./style";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <ButtonWrapper type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};
