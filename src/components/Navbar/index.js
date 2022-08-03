import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Imagen1 from '../../assets/img/1.png';


function NavbarApp() {
  // API_Star_Wars
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="nav">
      <Container>
        <Navbar.Brand  href="#home"><img src={Imagen1} width="70"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link m-2" to="/">Home</Link>
            <Link className="nav-link m-2" to="/characters">Characters</Link>
            <Link className="nav-link m-2" to="/planets">Planets</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;