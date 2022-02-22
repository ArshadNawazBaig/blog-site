import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Spinner } from "reactstrap";
import { register } from "../../network/api/auth";
import { registerAction } from "../../redux/actions/authActions";
import {
  clearMessageAction,
  setMessageAction,
} from "../../redux/actions/messageActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { FormWrapper, Field, Overlay } from "./style";
import Logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Heading, RedirectWrapper } from "../Login/style";
import { ToastNotify } from "../../components/Toast";

export const Register = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [toastStatus, setToastStatus] = useState({
    icon: "",
    title: "",
    message: "",
  });
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const handleSignup = (fields) => {
    const { username, email, password } = fields;
    setLoading(true);
    register({ username, email, password })
      .then((res) => {
        console.log(res);
        dispatch(registerAction(res.data));
        dispatch(setMessageAction("User is successfully registred!"));
        navigate("/login");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.status);
        dispatch(setMessageAction(err.message));
        setLoading(false);
        setToastStatus({
          icon: "danger",
          title: "Error",
          message: err.message,
        });
        setShow(true);
      });
  };
  useEffect(() => {
    return () => {
      dispatch(clearMessageAction());
    };
  }, []);
  const handleShow = (newValue) => {
    setShow(newValue);
    console.log(newValue);
  };
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
        <Row style={{ height: "100vh" }} className="align-items-center">
          <Col className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <Row className="signup-inner">
              <Col sm={12} md={6} className="form-left px-0">
                <Overlay>
                  <img alt="logo" src={Logo} className="logo" />
                </Overlay>
              </Col>
              <Col sm={12} md={6} className="bg-white">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(fields) => handleSignup(fields)}
                  render={({ errors, status, touched }) => (
                    <div className="form-right">
                      <Heading className="text-center">Signup Here</Heading>
                      <Form>
                        <div className="form-group py-3">
                          <Field
                            name="username"
                            type="text"
                            placeholder="Username"
                            className={
                              "form-control" +
                              (errors.username && touched.username
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
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
                        <div className="form-group py-3">
                          <Field
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            className={
                              "form-control" +
                              (errors.confirmPassword && touched.confirmPassword
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="confirmPassword"
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
                            Register Here{" "}
                            {loading ? <Spinner>Loading...</Spinner> : ""}
                          </Button>
                        </div>
                      </Form>
                      <RedirectWrapper>
                        Already an account? Let's{" "}
                        <span onClick={() => navigate("/login")}>
                          Login Here
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
