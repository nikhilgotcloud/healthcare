// Navbar.tsx
import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import Marquee from "../marquee/Marquee";


import "./navbar-style.css";
import { NavLink } from "react-router-dom";

const HealthcareNavbar: React.FC = () => {
  const btncolor = { backgroundColor: '#ab0000' }

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.innerWidth > 767){
      setScroll(window.scrollY > 90);
    }else{
      setScroll(window.scrollY >= 0);

    }
    });
    
  }, []);
  return (
    <>
      <Container className={`${scroll ? 'bg_transparent' : ''}  sicky_container`} >
        <Navbar expand="lg" className="healthcare-navbar rounded-lg shadow-md p-2 my-2">

          <Navbar.Brand href="#home" className="brand">
            <img
              src=".\image\INF-healthcare-logo.png"
              alt="INF Healthcare Logo"
              className="logo"

            />

          </Navbar.Brand>
          <div className="navbar-divider d-none d-lg-block "></div>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <button type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile_menu" aria-controls="staticBackdrop" className="off_canvas_triger">
            <img src="/image/navbar-hamburger.png" alt="" />
          </button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto menu-items ">
              <NavLink className="nav-link" to="/">HOME</NavLink>
              <NavLink className="nav-link" to="about">ABOUT US</NavLink>
              <NavLink className="nav-link" to="services">SERVICES</NavLink>
              <NavLink className="nav-link" to="blog">BLOG</NavLink>
              <NavLink className="nav-link" to="contact">CONTACT US</NavLink>

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
        </Navbar>
      </Container>


      <div className="offcanvas offcanvas-end offcanvas_meu" data-bs-backdrop="static" id="mobile_menu" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <Nav className="me-auto menu-items ">
            <NavLink className="nav-link" to="/" >Home</NavLink>
            <NavLink className="nav-link" to="about">About us</NavLink>
            <NavLink className="nav-link" to="services">Services</NavLink>
            <NavLink className="nav-link" to="blog">Blog</NavLink>
            <NavLink className="nav-link" to="contact">Contact us</NavLink>

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
          <div className="icon_box">
            <Marquee />
          </div>
        </div>
      </div>
    </>

  );
};

export default HealthcareNavbar;
