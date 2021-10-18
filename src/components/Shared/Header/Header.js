import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../../src/logo.png" ;

const Header = () => {
    return (
            <>
                <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container className="py-2">
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
    );
};

export default Header;