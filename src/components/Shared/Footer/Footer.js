import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../logo.png";
import './Footer.css';

const Footer = () => {
const {user,logOut} = useAuth();

    return (
        <div className="footer m-0">

            <div className="py-3 mt-5">
                <div className="row m-0">
                    <div className="col-md-4 text-white">
                        <img src={logo} alt="" />
                        <p className="py-3 px-5">The fundamental purpose of health care is to enhance quality of life by enhancing health. Commercial businesses focus on creating financial profit to support their valuation and remain viable. Health care must focus on creating social profit to fulfill its promise to society.</p>
                    </div>

                    <div className="col-md-4 links py-2">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        {user?.email ?
                        <Button onClick={logOut} className="btn btn-light mb-3">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <br />
                        <Navbar.Text className="bg-white px-3">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                    </div>

                    <div className="col-md-4 text-white">
                        <h2>Contacts</h2>
                        <h5>Call Now</h5>
                        <h6>0 (800) 716 95 25</h6>
                        <h5>Send Mail</h5>
                        <h6>medlife24@email.com</h6>
                        <h5>Visit MedLife</h5>
                        <h6 className="text-warning">8500, E Street, New York, NY, 75030</h6>

                    </div>
                </div>
            </div>

            <div>
                <p className="text-light"><small>MedLife © 2021. All rights reserved. Terms of use and Privacy Policy</small></p>
            </div>
        </div>
    );
};

export default Footer;