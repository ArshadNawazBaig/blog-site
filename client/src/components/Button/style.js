import styled, { css } from "styled-components";
import { Button as Btn } from "reactstrap";

export const ButtonWrapper = styled(Btn)`
  border: none;
  box-shadow: 1px 1px 20px 2px #ff5853;
  outline: none;
  text-transform: capitalize;
  color: #ffffff;
  transition: ease-in-out all 0.5s;
  &.primary {
    padding: 13px 25px;
    background: #f13934;
    &:hover {
      background: #000000;
      box-shadow: 1px 1px 20px 2px #606060;
      &:focus {
        box-shadow: 1px 1px 20px 2px #606060;
      }
    }
    &:focus {
      box-shadow: 1px 1px 20px 2px #ff5853;
    }
  }
  &.round {
    border-radius: 30px;
  }
  &.dashboard-primary-btn {
    background: #7b67de;
    border: 1px solid transparent;
    box-shadow: none;
    font: normal 500 15px Jost;
    &:hover {
      background: transparent;
      color: #7b67de;
      border-color: #7b67de;
    }
  }
  &.dashboard-sec-btn {
    background: transparent;
    border: 1px solid #7b67de;
    box-shadow: none;
    color: #7b67de;
    font: normal 500 15px Jost;
    &:hover {
      background: #7b67de;
      color: #fff;
      border-color: #7b67de;
    }
  }
`;
