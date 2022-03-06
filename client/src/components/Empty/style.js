import styled, { css } from "styled-components";

export const EmptyWrapper = styled.div`
    height: ${(props) => {
      return props.height ? props.height + "px;" : "50px;";
    }}
    background: ${(props) => {
      return props.background ? props.background + ";" : "transparent;";
    }}
    align-items: ${(props) => {
      return props.justify ? props.justify + ";" : "self-start;";
    }}
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
`;

export const EmptyTitle = styled.span`
  color: ${(props) => {
    return props.color ? props.color + ";" : "#333;";
  }};
  font: ${(props) => {
    return props.fontSize
      ? `normal 400 ${props.fontSize}px Jost;` : "normal 400 15px Jost;";
  }};
`;
