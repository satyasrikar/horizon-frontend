import axios from "axios";
import React, { useEffect, useState } from "react";
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
  Modal,
  Alert,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMappingView } from "../redux/mappingRequestSlice";

const Dashboard = () => {
  const mappingRequest = useSelector((state) => state.mappingRequest);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);
  const [mappingResponse, setMappingResponse] = useState();
  const [partnerData, setPartnerData] = useState([]);

  const fetchMappingTemplate = () => {
    axios
      .get("http://3.109.220.13:8080/v1/store/mapping/" + mappingRequest.id)
      .then((res) => {
        console.log(res.data);
        setMappingResponse(res.data);
      });
  };

  const approveMapping = () => {
    console.log(mappingRequest.mappingId);
    axios
      .put("http://3.109.220.13:8080/v1/store/mapping/" + mappingRequest.id)
      .then((res) => {
        setTimeout(() => {
          setShow(true);
        }, 2500);
      });
  };
  const deleteMapping = () => {
    axios
      .delete(
        "http://horizonresource-env.eba-w6wp4gx8.us-east-2.elasticbeanstalk.com/v1/store/mapping/" +
          mappingRequest.id
      )
      .then((res) => {
        setTimeout(() => {
          alert("Mapping Deleted");
        }, 2500);
      });
  };
  const [mappingList, setMappingList] = useState([]);

  const fetchPartnerData = () => {
    axios
      .get(
        "http://horizonresource-env.eba-w6wp4gx8.us-east-2.elasticbeanstalk.com/v1/store/partners"
      )
      .then((res) => {
        setPartnerData(res.data);
      });
  };
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

  const fetchMappingList = () => {
    axios.get("http://3.109.220.13:8080/v1/store/mapping/all").then((res) => {
      console.log(res.data);
      setMappingList(res.data);
    });
  };

  useEffect(() => {
    fetchMappingList();
    fetchPartnerData();
  }, []);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Container>
        <Modal
          size="xl"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="mappingTemplate"
        >
          <Modal.Header closeButton>
            <Modal.Title id="mappingTemplate">
              {mappingRequest.partnerName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert show={show} variant="success">
              <Alert.Heading>Mapping Approved</Alert.Heading>
              <p>
                You shall be eligible to offer Insurance services as a vendor at
                Horizon India now. For any queries feel free to write to us at{" "}
                <b>support@horizonIndia.com</b>
              </p>

              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setLgShow(false)}
                  variant="outline-success"
                >
                  Close
                </Button>
              </div>
            </Alert>
            <p>
              <b>Mapping ID:</b> {mappingRequest.id}
            </p>
            <p>
              <b>Approval Status:</b>
              {mappingRequest.isApproved ? "Approved" : "Pending"}
            </p>
            <p>
              <b>Mapping Template:</b>{" "}
              <Button size="sm" onClick={fetchMappingTemplate}>
                Load
              </Button>
            </p>

            {mappingResponse === undefined ? (
              ""
            ) : (
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                <Form.Control
                  as="textarea"
                  style={{ height: "3rem" }}
                  placeholder="Leave a comment here"
                  value={JSON.stringify(mappingResponse)}
                />
              </FloatingLabel>
            )}
            <hr />
            <div className="text-end">
              {/* <Button variant="danger" onClick={deleteMapping}>
                <img
                  src="images/trash-modified.png"
                  alt="view"
                  style={{ width: "1rem" }}
                />
                Delete
              </Button> */}
              &nbsp;
              <Button onClick={approveMapping} variant="success">
                Approve Mapping
              </Button>
            </div>
          </Modal.Body>
        </Modal>
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
                  {/* <h6>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Explicabo magni possimus eveniet eum iure, reprehenderit.
                  </h6> */}
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
                  {partnerData.map((partner, idx) => {
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
                              src={partner.imageUrl}
                              alt=""
                              style={{ width: "3rem" }}
                            />

                            <span>{partner.name}</span>
                          </div>
                        </td>
                        <td>{partner.irda}</td>
                        <td>{partner.insuranceOffered}</td>
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
            <Tab eventKey="mappings" title="Mapping Requests">
              <h5 className="text-start">
                <img
                  src="images/mapping.png"
                  alt=""
                  style={{ width: "1.5rem" }}
                />
                &nbsp;|&nbsp;<b>Mapping</b> requests
              </h5>

              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>Serial No.</th>
                    <th>Mapping ID</th>
                    <th>Partner Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mappingList === null
                    ? "Loading"
                    : mappingList.map((mapping, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{mapping.mappingId}</td>
                            <td>{mapping.partnerName}</td>
                            <td>
                              {mapping.isApproved ? "Approved" : "Pending"}
                            </td>

                            <td>
                              <Button
                                key={idx}
                                onClick={() => {
                                  setLgShow(true);
                                  dispatch(
                                    setMappingView({
                                      partnerName: mapping.partnerName,
                                      id: mapping.mappingId,
                                      mappingContent: "MAPPINGGG",
                                      isApproved: mapping.isApproved,
                                    })
                                  );
                                }}
                                variant="dark"
                              >
                                <img
                                  src="images/magnifying-glass-modified.png"
                                  alt="view"
                                  style={{ width: "1rem" }}
                                />
                                View
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
