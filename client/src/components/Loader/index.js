import React from "react";
import { Spinner } from "reactstrap";
import { SpinnerWrapper } from "./style";

export const Loader = ({background, color, height, align}) => {
  return (
    <SpinnerWrapper background={background} height={height} align={align} >
      <Spinner color={color}></Spinner>
    </SpinnerWrapper>
  );
};
