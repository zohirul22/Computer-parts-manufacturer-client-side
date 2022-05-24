import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';



const Navber = () => {

  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth)
  }


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
            <Nav.Link href="#sell" className='text-black'>Sell</Nav.Link>
            <Nav.Link href="#summary" className='text-black'>Summary</Nav.Link>
            <Nav.Link href="#help" className='text-black'>Help</Nav.Link>
            <Nav.Link href="blogs" className='text-black'>Blogs</Nav.Link>
            <Nav.Link href="portfolio" className='text-black'>Portfolio</Nav.Link>
          

          </Nav>

         {
           user &&  <Nav.Link href="dashboard" className='text-black'>Dashboard</Nav.Link>
         }

          {
            user ?
              <button onClick={handelSignOut} className={"btn p-2 btn-info"}>Sign Out</button> :
              <Nav.Link as={Link} to="login" href="#login" className='fs-4'>Login</Nav.Link>}


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;