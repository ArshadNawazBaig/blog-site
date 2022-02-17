import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "reactstrap";
import { login } from "../../network/api/auth";
import { loginAction } from "../../redux/actions/authActions";
import { setMessageAction } from "../../redux/actions/messageActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormWrapper, Field, Overlay, Heading } from "./style";
import { Button } from "../../components/Button";
import Logo from "./../../assets/logo.png";

export const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    console.log(fields, "fields");
    const { email, password } = fields;
    login({ email, password })
      .then((res) => {
        dispatch(loginAction(res.data));
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(setMessageAction("You are successfully logged in."));
        navigate("/");
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
            <Row className="login-inner">
              <Col sm={12} md={6} className="form-left px-0">
                <Overlay>
                  <img alt="logo" src={Logo} className="logo" />
                </Overlay>
              </Col>
              <Col sm={12} md={6}>
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
                        <div className="form-group py-3 d-flex justify-content-end">
                          <Button type="submit" className="primary mr-2 round">
                            Login
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
