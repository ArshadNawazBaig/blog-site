import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Spinner } from "reactstrap";
import {
  registerAction,
} from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { FormWrapper, Field, Overlay } from "./style";
import Logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Heading, RedirectWrapper } from "../Login/style";
import { toast } from "react-toastify";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
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
    dispatch(registerAction({username, email, password}));
  };

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    error && toast.error(error,
      {position: toast.POSITION.TOP_RIGHT})
  }, [error]);
  return (
    <FormWrapper>
      <Container fluid className="outer-ovelay">
        <Row style={{ height: "93.1vh" }} className="align-items-center">
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
