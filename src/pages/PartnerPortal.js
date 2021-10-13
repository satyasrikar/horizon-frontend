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
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const PartnerPortal = () => {
  const [localMapping, setLocalMapping] = useState();
  const [policyName, setPolicyName] = useState();
  const [partnerName, setPartnerName] = useState();
  const [policyDescription, setPolicyDescription] = useState();
  const [finalKeys, setFinalKeys] = useState();
  const [renderedFile, setRenderedFile] = useState();
  const [matchedData, setMatchedData] = useState();
  const [partnerPremium, setPartnerPremium] = useState();
  const [partnerDiscount, setPartnerDiscount] = useState();
  const [finalMapping, setFinalMapping] = useState({
    Name: "",
    Phone: "",
    Address: "",
    PAN: "",
    Aadhar: "",
    RegNumber: "",
    Age: "",
  });

  const mapping = useSelector((state) => state.mapping);
  const currentUser = useSelector((state) => state.user);

  const history = useHistory();

  const mockMapping = (postData) => {
    axios
      .post("http://localhost:8080/v1/store/mapping", postData)
      .then((res) => {
        console.log(`%cMOCK SERVICE RESPONSE`, "color: orange");
        console.log(res.data);
      });
  };

  const postPolicyData = () => {
    const postData = {
      ...finalMapping,
      ...policyDetails,
    };
    axios
      .post(
        "http://localhost:8080/v1/store/generate?partnerName=" + partnerName,
        postData
      )
      .then((res) => {
        console.log(`%cMAPPING RESPONSE`, "color: orange");
        console.log(res.data);
      });

    // mockMapping(postData);
  };

  const sampleCustomerData = [
    "Name",
    "Phone",
    "Address",
    "PAN",
    "Aadhar",
    "Reg Number",
    "Age",
  ];

  let policyDetails = {
    policyName: policyName,
    policyDescription: policyDescription,
    partnerDiscount: partnerDiscount,
    partnerPremium: partnerPremium,
  };

  const extractKeys = (jsonObject) => {
    const keys = Object.keys(jsonObject);
    keys.forEach((key, idx) => {
      const keyObject = {
        keyName: key,
        keyIdx: idx,
      };
      renderedKeys.push(keyObject);
    });
    // console.log(renderedKeys);
    setFinalKeys(renderedKeys);
  };

  useEffect(() => {
    setLocalMapping(mapping.mappingContent);
    extractKeys(JSON.parse(mapping.mappingContent));
    renderUIBasedOnJsonFile();
  }, []);

  const renderedKeys = new Array();

  var keyArray = renderedKeys;
  var keyList = [];
  keyArray.forEach(function (element) {
    keyList.push({ label: element, value: element });
  });

  const [randomInt, setRandomInt] = useState(8);

  const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const generateRandomRegNumber = (length) => {
    return Math.random().toString(16).substr(2, length);
  };

  const renderUIBasedOnJsonFile = () => {
    // console.log(finalKeys);
    let matchedSampleCustomerData;
    let matchedKeys = new Array();
    if (finalKeys === undefined) {
      // console.log("Loading final Keys");
    } else {
      finalKeys.forEach((element) => {
        matchedSampleCustomerData = sampleCustomerData.filter(
          (customerField) => customerField === element.keyName
        );
        {
          if (matchedSampleCustomerData[0] === undefined) {
            // console.log("DID NOT MATCH");
          } else {
            matchedKeys.push(matchedSampleCustomerData[0]);
          }
        }
      });
    }
    setMatchedData(matchedKeys);
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
                    {sampleCustomerData.map((mappingField, idx) => {
                      return (
                        <React.Fragment>
                          <ListGroup.Item
                            key={idx}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {/* <Button
                              variant="secondary"
                              onClick={() => {
                                console.log(mappingField);
                              }}
                            >
                              Log
                            </Button> */}
                            <span>{mappingField}</span>
                            <Form.Select
                              onChange={(e) => {
                                if (mappingField === e.target.value) {
                                  const finalMappingKeys =
                                    Object.keys(finalMapping);

                                  const extractedFinalMappingKey =
                                    finalMappingKeys.filter(
                                      (key) => key === mappingField
                                    );

                                  setFinalMapping({
                                    ...finalMapping,
                                    [extractedFinalMappingKey]: e.target.value,
                                  });
                                } else {
                                  console.log("ERROR");
                                }
                              }}
                              style={{ width: "50%" }}
                            >
                              <option>Choose</option>
                              {finalKeys === undefined
                                ? "Loading"
                                : finalKeys.map((finalKey, idx) => {
                                    return (
                                      <option value={finalKey.keyName}>
                                        {finalKey.keyName}
                                      </option>
                                    );
                                  })}
                            </Form.Select>
                          </ListGroup.Item>
                        </React.Fragment>
                      );
                    })}
                  </ListGroup>
                </Card>
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
                        <input
                          type="number"
                          onChange={(e) => {
                            setPartnerDiscount(e.target.value);
                          }}
                        />
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
                        <input
                          onChange={(e) => {
                            setPartnerPremium(e.target.value);
                          }}
                          type="number"
                        />
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
                <Form.Group className="mb-3">
                  <Form.Label>Partner Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => {
                      setPartnerName(e.target.value);
                    }}
                    placeholder="Enter Partner name"
                  />
                </Form.Group>
              </Row>
              <Row xs={1} sm={1} md={2}>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Policy Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => {
                        setPolicyName(e.target.value);
                      }}
                      placeholder="Enter policy name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Template Description</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => {
                        setPolicyDescription(e.target.value);
                      }}
                      placeholder="Template description"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row xs={1} sm={1} md={1}></Row>

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
                      console.log(finalMapping);
                      console.log(policyDetails);
                    }}
                  >
                    Test Mapping
                  </Button>
                </div>
                <div>
                  <Button
                    variant="success"
                    type="submit"
                    // style={{ paddingInline: "1rem" }}
                    className="px-3"
                    onClick={(e) => {
                      e.preventDefault();
                      postPolicyData();
                    }}
                  >
                    Save Mapping
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
