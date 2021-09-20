import React from "react";
import {
  Button,
  Carousel,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import GetQuoteForm from "../components/GetQuoteForm";
import HomeNavbar from "../components/HomeNavbar";

const Home = () => {
  return (
    <div>
      <GetQuoteForm />
    </div>
  );
};

export default Home;
