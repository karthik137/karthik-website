
import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
//32a6d493
const navbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="navbarcustom" variant="dark">
            <Navbar.Brand>&lt;KARTHIK/&gt;</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link id="navitem">About</Nav.Link>
                        <Nav.Link id="navitem">Skills</Nav.Link>
                        <Nav.Link id="navitem">Experience</Nav.Link>
                        <Nav.Link id="navitem">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
    
}

export default navbar