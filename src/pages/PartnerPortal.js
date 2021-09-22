import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const PartnerPortal = () => {
  const sampleCustomerData = ["Name", "Phone", "Address", "PAN"];

  const vehicleList = [
    {
      make: "Audi",
      model: "A4",
    },
    {
      make: "Audi",
      model: "A3",
    },
    {
      make: "Audi",
      model: "Q3",
    },
    {
      make: "Audi",
      model: "RS7",
    },
    {
      make: "Jeep",
      model: "Compass",
    },
    {
      make: "Tata",
      model: "Nexon",
    },
    {
      make: "Toyota",
      model: "Hilux",
    },
    {
      make: "BMW",
      model: "M4",
    },
    {
      make: "BMW",
      model: "i8",
    },
    {
      make: "BMW",
      model: "i3s",
    },
    {
      make: "Tata",
      model: "Nano",
    },
    {
      make: "Hyundai",
      model: "Santro",
    },
    {
      make: "Tata",
      model: "Indica",
    },
    {
      make: "Toyota",
      model: "Prius",
    },
    {
      make: "Honda",
      model: "Amaze",
    },
    {
      make: "Chevrolet",
      model: "Beat",
    },
  ];

  const [vehiclePriceSample, setVehiclePriceSample] = useState("");
  const [vehicleMakeSample, setVehicleMakeSample] = useState("");
  const [vehicleModelSample, setVehicleModelSample] = useState("");
  const [kmsDrivenSample, setKmsDrivenSample] = useState("");

  const [regNumberSample, setRegNumberSample] = useState("");
  const [regYearSample, setRegYearSample] = useState();

  const [randomInt, setRandomInt] = useState(8);

  const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const generateRandomRegNumber = (length) => {
    return Math.random().toString(16).substr(2, length);
  };

  const generateRandomVehicleMake = (index) => {
    return vehicleList[index].make;
  };
  const generateRandomVehicleModel = (index) => {
    return vehicleList[index].model;
  };
  const generateRandomMotorDetails = () => {
    setRegNumberSample(generateRandomRegNumber(12));
    setVehiclePriceSample(generateRandomInt(400000, 1400000));
    setRegYearSample(generateRandomInt(2015, 2021));
    setKmsDrivenSample(generateRandomInt(100, 35000));
    setRandomInt(generateRandomInt(0, vehicleList.length));
    setVehicleMakeSample(generateRandomVehicleMake(randomInt));
    setVehicleModelSample(generateRandomVehicleModel(randomInt));
  };

  return (
    <div>
      <Container className="mt-4 mb-4">
        <Row
          style={{ border: "3px solid black", borderRadius: "20px" }}
          className="register-form p-5 justify-content-center"
          xs={1}
          md={2}
        >
          <Col>
            <Row>
              <div>
                <h5>Test Dataset</h5>
              </div>
            </Row>
            <Row>
              <Col>
                <Card className="text-start">
                  <Card.Header>
                    <b>Customer</b>
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Name</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Phone</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Email</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>PAN</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col>
                <Card className="text-start">
                  <Card.Header>
                    <b>Partner</b>
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Name</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>IRDA License</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Discount</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Premium</span>
                      <Form.Check
                        type="checkbox"
                        id={`inline-checkbox`}
                        inline
                        name="type"
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <b>Motor Insurance Details</b>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="text-start">
                        <Card.Header>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <b>Sample data</b>
                            <Button
                              variant="success"
                              onClick={(e) => {
                                e.preventDefault();
                                generateRandomMotorDetails();
                              }}
                            >
                              Click Here
                            </Button>
                          </div>
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span> Vehicle Make</span>
                            <span>{vehicleMakeSample}</span>
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span> Vehicle Model</span>
                            <span>{vehicleModelSample}</span>
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Kilometers Driven</span>
                            <span>{kmsDrivenSample}</span>
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Ex-Showroom Price</span>
                            <span>{vehiclePriceSample}</span>
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Registration Number</span>
                            <span className="text-uppercase">
                              {regNumberSample}
                            </span>
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Registration Year</span>
                            <span>{regYearSample}</span>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card className="text-start">
                  <Card.Header>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <b>Policy Issuance Details</b>
                    </div>
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span> Partner Discount</span>
                      <span>
                        <input type="number" />
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span> Partner Premium</span>
                      <span>
                        <input type="number" />
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col>
            <Form>
              <Row className="mb-4">
                <h3 className="text-start">Horizon Partner Portal</h3>
                <h6 className="text-start">
                  <Link to="/">Read the FAQ</Link>
                </h6>
              </Row>
              <Row>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Paste JSON Test Contract or upload WSDL"
                    aria-label="TestDataInput"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Upload
                  </Button>
                  <Button variant="outline-secondary" id="button-addon2">
                    Submit
                  </Button>
                </InputGroup>
              </Row>
              <Row xs={1} sm={1} md={2}>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Template Name</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter template Name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Policy Name</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter policy name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Policy Template Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Template description"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Invite Template Collaborator</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Template Collaborator"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row xs={1} sm={1} md={2}>
                <Col>Template Preview</Col>
              </Row>

              <div
                className="mt-5"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Button
                    variant="dark"
                    type="submit"
                    // style={{ paddingInline: "1rem" }}
                    className="px-3"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Download Template
                  </Button>
                </div>
                <div>
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
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerPortal;
