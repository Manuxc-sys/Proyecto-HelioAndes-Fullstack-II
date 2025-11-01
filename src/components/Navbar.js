// src/components/Navbar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoHA from '../logoHA.png';

function NavbarPrincipal() {
  return (
<Navbar bg="light" data-bs-theme="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#inicio" className="fw-bold d-flex align-items-center">
          <img
            src={logoHA}
            width="50"
            height="50"
            className="me-2"
            alt="HelioAndes logo"
          />
          HelioAndes
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#soluciones">Soluciones</Nav.Link>
            <Nav.Link href="#demo-calculadora">DEMO</Nav.Link>
            <Nav.Link href="#planes">Planes</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrincipal;