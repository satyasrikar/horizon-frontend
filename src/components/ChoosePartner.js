import React, { useState } from "react";
import { Accordion, Alert, Button, Col, Container, Row } from "react-bootstrap";

const ChoosePartner = () => {
  const [show, setShow] = useState(true);
  const [partnerName, setPartnerName] = useState("");
  const [partnerDiscount, setPartnerDiscount] = useState("");
  const [policyAmount, setPolicyAmount] = useState("");
  const partners = [
    {
      name: "Tata AIG",
      description: "Lorem Ipsum Dolor Sit Amet.",
      discount: 45,
      policyAmount: 32459,
      imageUrl: "http://image3.mouthshut.com/images/imagesp/925030230s.png",
    },
    {
      name: "ICICI Lombard",
      description: "Lorem Ipsum Dolor Sit Amet.",
      discount: 53,
      policyAmount: 37445,
      imageUrl:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/09/27/612714-icici.jpg",
    },
    {
      name: "Cholamandalam Finance",
      description: "Lorem Ipsum Dolor Sit Amet.",
      discount: 48,
      policyAmount: 33542,
      imageUrl: "http://image3.mouthshut.com/images/imagesp/925868405s.jpg",
    },
    {
      name: "Reliance",
      description: "Lorem Ipsum Dolor Sit Amet.",
      discount: 44,
      policyAmount: 31259,
      imageUrl:
        "https://d1hl0z0ja1o93t.cloudfront.net/wp-content/uploads/2016/06/01181459/Reliance-Life-Logo.png",
    },
    {
      name: "IFFCO TOKIO",
      description: "Lorem Ipsum Dolor Sit Amet.",
      discount: 54,
      policyAmount: 34669,
      imageUrl:
        "https://d19ayerf5ehaab.cloudfront.net/assets/store-513912/513912-logo-1594288932.jpg",
    },
  ];
  return (
    <>
      <Alert show={show} variant="light">
        <Alert.Heading>Partner: {partnerName} </Alert.Heading>
        <p>Policy Amount: {policyAmount}</p>
        <p>Partner Discount: {partnerDiscount}%</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Confirm
          </Button>
        </div>
      </Alert>
      <Row>
        <Col lg={6}>
          <div style={{ backgroundColor: "whitesmoke" }}>
            <h5>Jeep Compass</h5>
            <p>Satyasri Kar</p>
            <h6>MH050700C009F</h6>
            <p>2018</p>
          </div>
          <div>
            <img
              src="https://s1.cdn.autoevolution.com/images/news/gallery/2022-jeep-compass-rendered-grand-compass-three-row-suv-may-also-happen_29.jpg"
              alt=""
              style={{ width: "24rem" }}
            />
          </div>
        </Col>

        <Col lg={6}>
          {partners
            ? partners.map((partner, key) => {
                return (
                  <div>
                    <Accordion>
                      <Accordion.Item eventKey={key}>
                        <Accordion.Header>
                          <Row
                            className="justify-content-center"
                            style={{
                              display: "flex",
                              width: "16rem",
                            }}
                          >
                            <Col className="col-12 col-md-6">
                              <span> {partner.name}</span>
                            </Col>
                            <Col className="col-12 col-md-4">
                              <span>
                                <h6>
                                  <b> ₹{partner.policyAmount}</b>
                                </h6>
                              </span>
                            </Col>
                            <Col className="col-12 col-md-2">
                              <img
                                src={partner.imageUrl}
                                alt=""
                                style={{ width: "3rem" }}
                              />
                            </Col>
                          </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Col>
                            <img
                              src={partner.imageUrl}
                              alt=""
                              style={{ width: "5rem" }}
                            />
                          </Col>

                          <Row>
                            Description: {partner.description}
                            <br />
                            Discount: {partner.discount}% <br />
                            <b>Policy Amount: ₹{partner.policyAmount}</b> <br />
                          </Row>
                          <Button
                            variant="dark"
                            onClick={() => {
                              setShow(true);
                              setPartnerName(partner.name);
                              setPartnerDiscount(partner.discount);
                              setPolicyAmount(partner.policyAmount);
                            }}
                          >
                            Select
                          </Button>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                );
              })
            : "NOT"}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="dark">Back</Button>
        </Col>
        <Col>
          <Button variant="dark">Next: Add details</Button>
        </Col>
      </Row>
    </>
  );
};

export default ChoosePartner;
