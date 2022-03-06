import React from "react";
import { EmptyWrapper, EmptyTitle } from "./style";
import Logo from "./../../assets/logo.png";
import { Button } from "../Button";

export const Empty = ({
  height,
  children,
  background,
  color,
  justify,
  fontSize,
  logo,
  back
}) => {
  return (
    <EmptyWrapper height={height} background={background} justify={justify}>
      {logo && <img src={Logo} />}
      <EmptyTitle color={color} fontSize={fontSize} className="mt-2" >
        {children}
      </EmptyTitle>
      {back && 
        <Button className="primary round mt-3">Go Back</Button>
      }
    </EmptyWrapper>
  );
};
