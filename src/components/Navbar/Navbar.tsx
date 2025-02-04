// Navbar.tsx
import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";

import "./navbar-style.css";

const HealthcareNavbar: React.FC = () => {
    const btncolor= {backgroundColor:'#ab0000'}
  return (
    <Navbar expand="lg" className="healthcare-navbar rounded-lg shadow-md p-2 my-2">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <img
            src=".\image\INF-healthcare-logo.png"
            alt="INF Healthcare Logo"
            className="logo"
           
          />
          
        </Navbar.Brand>
        <div className="navbar-divider d-none d-lg-block "></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu-items ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About us</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="contact">Contact us</Nav.Link>
            
          </Nav>
          <Form className="d-flex search-form ">
            <div className="search-box rounded-pill">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <button className="search-button rounded-circle " style={btncolor} >
              <i className="bi bi-search"></i>
              </button>
            </div>
          </Form>
          <div className="navbar-divider d-none d-lg-block "></div>
          <button className="make_appoint_btn d-flex p-2" style={btncolor}>
                          Make an Appointment{" "}
                          <img src="image/iconArrow.svg" alt="Arrow Icon" loading="lazy" />
                        </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HealthcareNavbar;
