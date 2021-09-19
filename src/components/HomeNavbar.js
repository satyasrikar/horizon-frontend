import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link activeClassName="navLinkActive" className="navHeader" to="/">
            <img
              src="images/moonrise-invert.png"
              alt="logo"
              style={{ width: "1.5rem", height: "1.5rem" }}
              className="mx-2"
            />
            Horizon India
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Insurance" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  className="navLinkMenu"
                  activeClassName="navLinkActiveMenu"
                  to="/"
                >
                  Motor
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Travel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Health</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link>
              <NavLink
                className="navLink"
                activeClassName="navLinkActive"
                to="/insurance"
              >
                Get Quote
              </NavLink>
            </Nav.Link> */}
            <Nav.Link>
              <NavLink
                className="navLink"
                activeClassName="navLinkActive"
                to="/about"
              >
                About us
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="navLink"
                activeClassName="navLinkActive"
                to="/login"
              >
                Login
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
