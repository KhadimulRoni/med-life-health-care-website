import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../../src/logo.png" ;
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();

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
                <Nav.Link as={Link} to="/about">AboutUs</Nav.Link>
                {user?.email ?
                    <Button onClick={logOut} className="btn btn-info">Logout</Button> :
                    <Nav.Link  as={Link} to="/login">Login</Nav.Link>}
                <Navbar.Text className="px-2">
                    Signed in as: <a href="#login" className="text-danger">{user?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
    );
};

export default Header;