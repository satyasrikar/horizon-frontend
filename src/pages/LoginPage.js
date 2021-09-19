import React from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-4" md={2}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
                style={{ paddingInline: "1rem" }}
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
