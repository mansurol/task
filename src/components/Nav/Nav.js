import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


const nav = () => {
    return (
      <div>
        <Navbar collapseOnSelect   expand="sm" className="coloring">
          <div className="container">
        <Navbar.Brand as={Link}  to="/home">
        <Navbar.Brand href="#home">Tech <br/>Froring</Navbar.Brand>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link as={Link}  to="/More">More</Nav.Link>
             <Nav.Link as={Link}  to="/Services">Services</Nav.Link>
          <Nav className="navbar-nav ml-auto text-center fontsize ">

            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={Link}  to="/about">Features</Nav.Link>
             <Nav.Link as={Link}  to="/contact">Resurses</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        <Button variant="outline-secondary" >Sing In/Sing Up</Button>

        </div>
      </Navbar>
     
    

      </div>
    );
};

export default nav;