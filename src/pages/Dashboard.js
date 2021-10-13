import React, { useState } from "react";
import {
  Button,
  Tabs,
  Col,
  Tab,
  Image,
  Row,
  Card,
  Container,
  Table,
} from "react-bootstrap";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user);
  const mockUserData = [
    {
      userId: "USER4453",
      userName: "Adam Smith",
      userIdType: "Aadhar",
      userIdNumber: "2314-8294-9916",
    },
    {
      userId: "USER7174",
      userName: "Freidrich Shaye",
      userIdType: "Aadhar",
      userIdNumber: "8376-1293-8547",
    },
    {
      userId: "USER9228",
      userName: "Jane Cowley",
      userIdType: "PAN",
      userIdNumber: "EUAKL4519R",
    },
    {
      userId: "USER1219",
      userName: "Sherry Dower",
      userIdType: "Aadhar",
      userIdNumber: "9997-1854-4532",
    },
  ];
  const mockPartnerData = [
    {
      partnerId: "HORZ8823",
      partnerName: "TATA Aig",
      partnerIRDA: "IRDA/MH/00432",
      insuranceOffered: ["motor", "travel", "health"],
      partnerImgUrl:
        "http://image3.mouthshut.com/images/imagesp/925030230s.png",
    },
    {
      partnerId: "HORZ3237",
      partnerName: "ICICI Lombard",
      partnerIRDA: "IRDA/WB/49711",
      insuranceOffered: ["motor", "life"],
      partnerImgUrl:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/09/27/612714-icici.jpg",
    },
    {
      partnerId: "HORZ9687",
      partnerName: "Reliance Life",
      partnerIRDA: "IRDA/DL/11584",
      insuranceOffered: ["life"],
      partnerImgUrl:
        "https://d1hl0z0ja1o93t.cloudfront.net/wp-content/uploads/2016/06/01181459/Reliance-Life-Logo.png",
    },
  ];
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Container>
        <Row>
          <Card>
            <Card.Header>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Horizon cPanel</h4>
                <Button variant="dark">
                  <img
                    src="images/refresh.png"
                    alt="refreshDashboard"
                    style={{ width: "1rem" }}
                  />
                  &nbsp;
                  <span>Sync</span>
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Row
                style={{
                  display: "flex",
                }}
              >
                <Col className="text-start">
                  <h5>{currentUser.name ? currentUser.name : "John Doe"}</h5>
                  <h6>
                    <b>Horizon System Admin</b>
                  </h6>
                  <h6>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo magni possimus eveniet eum iure, reprehenderit.
                  </h6>
                </Col>
                <Col className="text-end">
                  <Image
                    src="https://randomuser.me/api/portraits/men/22.jpg"
                    roundedCircle
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="partners" title="Partners">
              <h5 className="text-start">
                <img
                  src="images/insurance.png"
                  alt=""
                  style={{ width: "1.5rem" }}
                />
                &nbsp;|&nbsp;<b>PARTNERS</b> registered with Horizon India
              </h5>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Partner Name</th>
                    <th>IRDA License</th>
                    <th>Insurance Offered</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPartnerData.map((partner, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{partner.partnerId}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <img
                              src={partner.partnerImgUrl}
                              alt=""
                              style={{ width: "3rem" }}
                            />

                            <span>{partner.partnerName}</span>
                          </div>
                        </td>
                        <td>{partner.partnerIRDA}</td>
                        <td>
                          {partner.insuranceOffered.map(
                            (insuranceType, insuranceIndex) => {
                              return ` ${insuranceType}`;
                            }
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Tab>

            <Tab eventKey="users" title="Users">
              <h5 className="text-start">
                <img src="images/user.png" alt="" style={{ width: "1.5rem" }} />
                &nbsp;|&nbsp;<b>USERS</b> registered with Horizon India
              </h5>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>User ID Type</th>
                    <th>ID Number</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUserData.map((user, idx) => {
                    return (
                      <tr>
                        <td>{user.userId}</td>
                        <td>{user.userName}</td>
                        <td>{user.userIdType}</td>
                        <td>{user.userIdNumber}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="mappings" title="Mappings">
              <h5 className="text-start">
                <img
                  src="images/mapping.png"
                  alt=""
                  style={{ width: "1.5rem" }}
                />
                &nbsp;|&nbsp;<b>Mappings</b> requests
              </h5>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
