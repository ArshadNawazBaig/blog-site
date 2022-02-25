import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Spinner } from "reactstrap";
import { login } from "../../network/api/auth";
import {
  loginFailAction,
  loginRequestAction,
  loginSuccessAction,
} from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormWrapper, Field, Overlay, Heading, RedirectWrapper } from "./style";
import { Button } from "../../components/Button";
import Logo from "./../../assets/logo.png";
import { ToastNotify } from "../../components/Toast";

export const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const [show, setShow] = useState(false);
  const [toastStatus, setToastStatus] = useState({
    icon: "",
    title: "",
    message: "",
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleLogin = (fields) => {
    const { email, password } = fields;
    dispatch(loginRequestAction());
    login({ email, password })
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        dispatch(loginFailAction(err.message));
        setToastStatus({ icon: "danger", title: "Error", message: error });
        setShow(true);
      });
  };

  const handleShow = (newValue) => {
    setShow(newValue);
  };

  useEffect(() => {
    if(user) {
      return navigate('/')
    }
  }, []);
  return (
    <FormWrapper>
      <ToastNotify
        show={show}
        handleShow={handleShow}
        title={toastStatus.title}
        icon={toastStatus.icon}
        message={toastStatus.message}
      />
      <Container fluid className="outer-ovelay">
        <Row style={{ height: "93.1vh" }} className="align-items-center">
          <Col className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <Row className="login-inner">
              <Col sm={12} md={6} className="form-left px-0">
                <Overlay>
                  <img alt="logo" src={Logo} className="logo" />
                </Overlay>
              </Col>
              <Col sm={12} md={6} className="bg-white">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(fields) => handleLogin(fields)}
                  render={({ errors, status, touched }) => (
                    <div className="form-right">
                      <Heading className="text-center">Login Here</Heading>
                      <Form>
                        <div className="form-group py-3">
                          <Field
                            name="email"
                            type="text"
                            placeholder="Email"
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group py-3">
                          <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            className={
                              "form-control" +
                              (errors.password && touched.password
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group py-4 d-flex justify-content-center">
                          <Button
                            disabled={loading ? true : false}
                            type="submit"
                            className="primary mr-2 round"
                          >
                            Login Here{" "}
                            {loading ? <Spinner>Loading...</Spinner> : ""}
                          </Button>
                        </div>
                      </Form>
                      <RedirectWrapper>
                        Not an account yet? Let's{" "}
                        <span onClick={() => navigate("/signup")}>
                          Signup Here
                        </span>
                      </RedirectWrapper>
                    </div>
                  )}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};
