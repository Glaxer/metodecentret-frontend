import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../images/logo.svg";
import "../css/Header.css";

export default function Header() {

  return (
    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="240"
            height="90"
            className="d-inline-block align-top"
            alt="Metodecentret logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLink" href="/">Metoder</Nav.Link>
            <Nav.Link className="navLink" href="/">Udgivelser og projekter</Nav.Link>
            <Nav.Link className="navLink" href="/">Temaer</Nav.Link>
            <Nav.Link className="navLink" href="/">Om Metodecentret</Nav.Link>
            <Nav.Link className="navLink" href="/">Kontakt</Nav.Link>
            <Nav.Link className="navLink" href="/">Nyhedsbrev</Nav.Link>
            <Nav.Link className="navLink" href="/">English</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
