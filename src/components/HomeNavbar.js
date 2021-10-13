import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/authSlice";

const HomeNavbar = () => {
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
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
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <NavLink
                className="navLink"
                activeClassName="navLinkActive"
                to="/portal/new"
              >
                Partner Portal
              </NavLink>
            </Nav.Link>

            {currentUser.accessToken ? (
              <>
                <Nav.Link>
                  <NavLink
                    className="navLink"
                    activeClassName="navLinkActive"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    className="navLink"
                    activeClassName="navLinkActive"
                    to="/"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </NavLink>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link>
                <NavLink
                  className="navLink"
                  activeClassName="navLinkActive"
                  to="/login"
                >
                  Login
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
