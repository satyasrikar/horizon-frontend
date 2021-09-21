import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ProgressBar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const UserRegisterPage = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <ProgressBar animated variant="success" now={progress} />
      <Container className="mt-4">
        <Row className="justify-content-center" xs={1} md={1}>
          <Form
            style={{ border: "3px solid black", borderRadius: "15px" }}
            className="p-5"
          >
            <Row className="mb-4">
              <h3 className="text-start">Create a free Horizon account</h3>
              <h6 className="text-start">
                <Link to="/">Sign up as a partner</Link>
              </h6>
            </Row>
            <Row xs={1} sm={1} md={4}>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">Enter full name</Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label htmlFor="inputPassword5">
                    Re-enter Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row xs={1} sm={1} md={4}>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>PAN Card Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter PAN" />
                  <Form.Text className="text-muted">
                    We'll never share your PAN with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Profession</Form.Label>
                  <Form.Control type="text" placeholder="Profession" />
                </Form.Group>
              </Col>
            </Row>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div className="text-start">
                <Form.Group className="mt-5" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="I have read the Terms and Conditions"
                      name="type"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="Send me updates on new policies, and offers at Horion India"
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
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Create account
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default UserRegisterPage;
