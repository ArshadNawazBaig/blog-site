import styled from "styled-components";
import background from "./../../assets/signup.jpg";
import { Field as Input } from "formik";

export const FormWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  & .outer-ovelay {
    background: rgb(0 0 0 / 80%);
  }
  & .form-left {
    background-image: url(${background});
    min-height: 630px;
    object-fit: cover;
  }
  & .form-right {
    display: inline-grid;
    width: 100%;
    align-items: center;
    padding: 30px;
    min-height: 630px;
  }
  & .login-inner {
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

export const Heading = styled.h2`
  color: #000000;
  font: normal 800 28px Poppins;
  display: block;
  letter-spacing: -0.5px;
  line-height: 14px;
  margin-bottom: 18px;
  position: relative;
  border-bottom: 2px solid #f5f5f5;
`;

export const RedirectWrapper = styled.p`
  color: #000000;
  font: normal 300 16px Poppins;
  display: block;
  letter-spacing: -0.5px;
  line-height: 14px;
  position: relative;
  & span {
    color: #f13934;
    text-decoration: underline;
    cursor: pointer;
  }
`;
