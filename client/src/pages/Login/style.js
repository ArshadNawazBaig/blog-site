import styled from "styled-components";
import background from "./../../assets/signup.jpg";
import { Field as Input } from "formik";

export const FormWrapper = styled.div`
  & .form-left {
    background-image: url(${background});
    min-height: 630px;
  }
  & .form-right {
    display: inline-grid;
    width: 100%;
    align-items: center;
    padding: 50px;
    min-height: 630px;
  }
  & .login-inner {
    box-shadow: 1px 1px 20px 12px #e3e3e3;
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
