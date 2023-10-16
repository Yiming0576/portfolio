import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';

import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import AnimatedPageSlider from "./AnimatedPageSlider";
import AnimatedBackground from "./AnimatedBackground";

const NavBar = () => {

// Define styled components
const CustomNavbar = styled(Navbar)`
  background-color: #FFFFFF; // Your background color
`;

const BrandLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const CustomNav = styled(Nav)`
  max-height: 100px;
`;

const NavLink = styled(Link)`
  color: #343a40; // Your text color
  font-size: 20px; // Your font size
  margin: 0 10px; // Adjust the spacing
  text-decoration: none;

  &:hover {
    color: #007bff; // Hover color
  }
`;


  return (
    <Router>
      <div>
        <CustomNavbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/home">
              <BrandLogo
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
                alt="logo"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <CustomNav
                className="ml-auto my-2 my-lg-0 text-body fs-5 " 
                style={{ maxHeight: '100px' }}
                navbarScroll
                justify="end"
              >
                <NavLink as={Link} to="/home">Home</NavLink>
                <NavLink as={Link} to="/about">About</NavLink>
                <NavLink as={Link} to="/projects">Projects</NavLink>
                <NavLink as={Link} to="/resume">Resume</NavLink>
              </CustomNav>
            </Navbar.Collapse>
          </Container>
        </CustomNavbar>
      </div>

      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <AnimatedPageSlider />
      {/* <AnimatedBackground /> */}
    </Router>
  );
};

export default NavBar;
