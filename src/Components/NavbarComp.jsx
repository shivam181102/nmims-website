import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Images/logo.png";
function NavbarComp() {
  return (
    <><Navbar
    bg=""
    style={{ background: "white",border:"1px solid black" }}
    expand="lg"
    variant="light"
    // fixed = 'top'
  >
    <Container>
    
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="55"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link
          style={{
            color: "rgb(220,53,69)",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          WELCOME TO NGASCE STUDENT ZONE
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <Navbar
    bg=""
    style={{ background: "white",width:'100%' }}
    expand="lg"
    variant="light"
    fixed = 'top'
  >
    <Container>
    
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="55"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link
          style={{
            color: "rgb(220,53,69)",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          WELCOME TO NGASCE STUDENT ZONE
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar></>
  )
}

export default NavbarComp