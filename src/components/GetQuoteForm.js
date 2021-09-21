import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  ButtonGroup,
  Breadcrumb,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ChoosePartner from "./ChoosePartner";
import HomeCarousel from "../components/HomeCarousel";

const GetQuoteForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  return (
    <Container>
      <Row className="justify-content-center">
        <HomeCarousel />
        <h4>Horizon Motor Insurance</h4>
      </Row>
      <Row
        style={{ backgroundColor: "lightgoldenrodyellow" }}
        className="justify-content-md-center"
      >
        <Col className="col-md-8">
          {!formSubmit ? (
            <Form
              className="px-md-5"
              style={{
                backgroundColor: "wheat",
                // paddingInline: "12rem",
                paddingBlock: "2rem",
              }}
            >
              <hr />
              <Row className="mb-3" xs={1} md={2}>
                <Col>
                  <h6>Choose insurance type</h6>
                </Col>
                <Col>
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="radio"
                      id={`inline-radio`}
                      inline
                      label="New"
                      name="type"
                    />
                    <Form.Check
                      type="radio"
                      id={`inline-radio`}
                      inline
                      label="Renewal"
                      name="type"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-3" xs={1} md={2}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control type="email" placeholder="MH0500900C42" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Registration Year</Form.Label>
                  <Form.Control type="text" placeholder="Registration Year" />
                </Form.Group>
              </Row>

              <Row className="mb-3" xs={1} md={2}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Vehicle Make</Form.Label>
                  <Form.Select defaultValue="Choose a vehicle make">
                    <option>Choose a vehicle make</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>Tata</option>
                    <option>Jeep</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Motor Model</Form.Label>
                  <Form.Select defaultValue="Choose a vehicle make">
                    <option>Choose a vehicle model</option>
                    <option>A3 (Audi)</option>
                    <option>A4 (Audi)</option>
                    <option>Q4 (Audi)</option>
                    <option>R8 (Audi)</option>
                    <option>RS7 (Audi)</option>
                    <option>Fortuner (Toyota)</option>
                    <option>Prius (Toyota)</option>
                    <option>Corolla (Toyota)</option>
                    <option>CRV (Honda)</option>
                    <option>WRV (Honda)</option>
                    <option>Amaze (Honda)</option>
                    <option>Indica (Tata)</option>
                    <option>Tiago (Tata)</option>
                    <option>Bolt (Tata)</option>
                    <option>Sumo (Tata)</option>
                    <option>Nexon (Tata)</option>
                    <option>Compass (Jeep)</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row> */}

              <Row>
                {/* <Col>
                  <Button variant="dark">Submit Details</Button>
                </Col> */}
                <Col>
                  <Button
                    variant="dark"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("next");
                      setFormSubmit(true);
                      console.log(formSubmit);
                    }}
                  >
                    Submit Details
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            <div className="mt-4 mb-4">
              <ChoosePartner />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GetQuoteForm;
