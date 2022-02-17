import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "reactstrap";
import { register } from "../../network/api/auth";
import { registerAction } from "../../redux/actions/authActions";
import { setMessageAction } from "../../redux/actions/messageActions";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { FormWrapper, Field, Overlay } from "./style";
import Logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Heading } from "../Login/style";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    register({ username, email, password })
      .then((res) => {
        dispatch(registerAction(res.data));
        dispatch(setMessageAction("User is successfully registred!"));
        navigate("/login");
      })
      .catch((err) => {
        dispatch(setMessageAction(err.message));
      });
  };
  return (
    <FormWrapper>
      <Container fluid>
        <Row style={{ height: "100vh" }} className="align-items-center">
          <Col className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <Row className="signup-inner">
              <Col sm={12} md={6} className="form-left px-0">
                <Overlay>
                  <img alt="logo" src={Logo} className="logo" />
                </Overlay>
              </Col>
              <Col sm={12} md={6}>
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
                        <div className="form-group py-3 d-flex justify-content-end">
                          <Button type="submit" className="primary mr-2 round">
                            Register
                          </Button>
                        </div>
                      </Form>
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
