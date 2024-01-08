import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../middelware/authContext';

function CustomNavbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#HomePage" style={{ marginLeft: '25px' }}>Bews Treatment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/About" style={{ marginRight: '13px' }}>Tentang</Nav.Link>
            <Nav.Link as={Link} to="/Service" style={{ marginRight: '13px' }}>Layanan</Nav.Link>
            <Nav.Link as={Link} to="/galeri" style={{ marginRight: '13px' }}>Galeri</Nav.Link>
            <Nav.Link as={Link} to="/invoice" style={{ marginRight: '13px' }}>Invoice</Nav.Link>
            <Nav.Link as={Link} to="/kontak" style={{ marginRight: '16px' }}>Kontak</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Button variant="outline-light" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button variant="outline-light" as={Link} to="/FormLogin" style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
