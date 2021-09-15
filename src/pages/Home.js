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
import HomeCarousel from "../components/HomeCarousel";
import HomeNavbar from "../components/HomeNavbar";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
