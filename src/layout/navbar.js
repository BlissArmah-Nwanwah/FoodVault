import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.css'
import { Link } from 'react-router-dom'
const Navbars = () => {
  return (
    <Navbar expand="lg" >
      <Container className='nav fluid'>
        <Link to='/'>
        <Navbar.Brand href="#home" > <a className='logo-btn'>
        <span className="greener">FOOD.</span><span className="g">VAULT</span>
        </a></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto move" >
            <Link to={'/'}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to={'/products'}>
              <Nav.Link href="products">Products</Nav.Link>
            </Link>
            <Link to={'/about'}>
              <Nav.Link href="#about">About</Nav.Link>
            </Link>
            <Link to={'/login'}>
              <Nav.Link href="#login">Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars