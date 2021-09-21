import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ProgressBar,
  FloatingLabel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const PartnerRegisterPage = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <ProgressBar animated variant="success" now={progress} />
      <Container className="mt-4">
        <Row className="justify-content-center" xs={1} md={1}>
          <Form
            style={{ border: "3px solid black", borderRadius: "20px" }}
            className="register-form p-5"
          >
            <Row className="mb-4">
              <h3 className="text-start">Create a Partner account</h3>
            </Row>
            <Row xs={1} sm={1} md={3}>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Partner Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">Enter full name</Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Agent Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicPartnerLicense"
                >
                  <Form.Label>Agent Email</Form.Label>
                  <Form.Control type="email" placeholder="Agent Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row xs={1} sm={1} md={3}>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Partner Policy Discount</Form.Label>
                  <Form.Control type="date" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Partner Policy Premium</Form.Label>
                  <Form.Control type="number" placeholder="Enter PAN" />
                  <Form.Text className="text-muted">
                    We'll never share your PAN with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicPartnerLicense"
                >
                  <Form.Label>IRDA License</Form.Label>
                  <Form.Control type="number" placeholder="IRDAIXXXXXX" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div
                className="text-start"
                style={{
                  display: "flex",
                }}
              >
                <div className="px-4">
                  <b>Insurance Offered:</b>
                </div>

                <Form.Group className="" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="Motor"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="Life"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="Health"
                      name="type"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="Travel"
                      name="type"
                    />
                  </div>
                </Form.Group>
              </div>
            </Form.Group>

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
                Create partner account
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerRegisterPage;
