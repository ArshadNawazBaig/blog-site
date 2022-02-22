import React from "react";
import { Spinner } from "reactstrap";
import { SpinnerWrapper } from "./style";

export const Loader = () => {
  return (
    <SpinnerWrapper>
      <Spinner></Spinner>
    </SpinnerWrapper>
  );
};
