import styled, { css } from "styled-components";

export const SpinnerWrapper = styled.div`
  ${(props) => {
    switch (props.background) {
      case "none":
        return css`
          background: none;
        `;

      default:
        return css`
          background: #fff;
        `;
    }
  }}
  ${(props) => {
    return css`
      min-height: ${props.height};
    `;
  }}
  ${(props) => {
    return css`
      justify-content: ${props.align};
    `;
  }}
  display: flex;
  align-items: center;
  width: 100%;
`;
