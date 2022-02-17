import styled, { css } from "styled-components";
import { Button as Btn } from "reactstrap";

export const ButtonWrapper = styled(Btn)`
  border: none;
  box-shadow: 1px 1px 20px 2px #ff5853;
  padding: 13px 25px;
  text-transform: capitalize;
  color: #ffffff;
  transition: ease-in-out all 0.5s;
  &.primary {
    background: #f13934;
    &:hover {
      background: #000000;
      box-shadow: 1px 1px 20px 2px #606060;
    }
  }
  &.round {
    border-radius: 30px;
  }
`;
