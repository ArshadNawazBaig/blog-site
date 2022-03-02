import styled from "styled-components";
import background from "./../../assets/signup.jpg";
import { Field as Input } from "formik";

export const FormWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  & .outer-ovelay {
    background: rgb(0 0 0 / 80%);
  }
  & .form-left {
    background-image: url(${background});
    min-height: 630px;
  }
  & .form-right {
    display: inline-grid;
    width: 100%;
    align-items: center;
    padding: 30px;
    min-height: 630px;
  }
  & .signup-inner {
    box-shadow: 0px 15px 20px 9px #0000003d;
  }
  & .invalid-feedback {
    position: absolute;
    left: 12px;
  }
  & .form-group {
    position: relative;
  }
  & .form-control:focus {
    background: transparent;
    box-shadow: none;
  }
  & .spinner-border {
    width: 1rem;
    height: 1rem;
  }
`;

export const Field = styled(Input)`
  border: none;
  border-bottom: 1px solid #bbb;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
`;

export const Overlay = styled.div`
  height: 100%;
  background: rgb(255 111 111 / 79%);
  display: flex;
  justify-content: center;
  align-items: center;
  & .logo {
    background: #ffffff;
    border-radius: 15px;
    padding: 10px 20px;
  }
`;
