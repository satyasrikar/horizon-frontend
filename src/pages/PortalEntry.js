import React, { useState } from "react";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const PortalEntry = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [renderedFile, setRenderedFile] = useState({});
  const changeHandler = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setRenderedFile(JSON.parse(e.target.result));
      setSelectedFile(e.target.result);
      localStorage.setItem("mapping", e.target.result);
    };
  };
  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <input type="file" name="file" onChange={changeHandler} />
            <FormControl
              placeholder="Paste JSON Test Contract or upload WSDL"
              aria-label="TestDataInput"
              aria-describedby="basic-addon2"
            />

            <Button variant="outline-secondary" id="button-addon2">
              Upload
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Link to="/partners/portal/2">
          <Button>Next</Button>
        </Link>
      </Row>
    </Container>
  );
};

export default PortalEntry;
