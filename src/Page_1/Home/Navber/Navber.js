import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navber = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-blue-200' variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className='text-black'>Computer-parts-manufacturer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >

            <Nav.Link href="#part" className='text-black'>Parts</Nav.Link>
            <Nav.Link href="#review" className='text-black'>Reviews</Nav.Link>
            <Nav.Link href="#summary" className='text-black'>Summary</Nav.Link>
            <Nav.Link href="#pricing" className='text-black'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='text-black'>Pricing</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;