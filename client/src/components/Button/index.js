import React from "react";
import { ButtonWrapper } from "./style";

export const Button = ({ children, onClick, className, type, disabled }) => {
  return (
    <ButtonWrapper disabled={disabled} type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};
