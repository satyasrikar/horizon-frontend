import React, { useState } from "react";
import { Form, Button, Container, Row, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/authSlice";
import { useHistory } from "react-router";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    const loginUrl = "http://localhost:8045/api/auth/login";
    const loginRequest = {
      username: email,
      password: password,
    };

    axios.post(loginUrl, loginRequest).then((res) => {
      dispatch(
        addUser({
          username: res.data.username,
          accessToken: res.data.token,
          name: res.data.name,
        })
      );

      history.push("/dashboard");
    });
  };
  return (
    <div>
      <Container className="mt-4">
        <Row className="justify-content-center" md={2}>
          <Form
            style={{ border: "3px solid black", borderRadius: "20px" }}
            className="login-form p-5"
          >
            <Row>
              <h3 className="text-start">Login to Horizon</h3>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="Remember me"
                      name="type"
                    />
                  </div>
                </Form.Group>
              </div>
              <div>
                <p>Forgot password?</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="dark"
                type="submit"
                // style={{ paddingInline: "1rem" }}
                className="px-3"
                onClick={loginHandler}
              >
                <img
                  src="images/enter-invert.png"
                  alt="login"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                />
                Login
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
