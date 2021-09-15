import React from "react";
import {
  Button,
  Carousel,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Horizon India</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Insurance" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Motor</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Travel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Health</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About us</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HomeCarousel />
    </div>
  );
};

export default Home;
