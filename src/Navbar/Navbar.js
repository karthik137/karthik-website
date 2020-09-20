
import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const navbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" variant="light">
            <Navbar.Brand>KARTHIK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Skills</Nav.Link>
                        <Nav.Link>Experience</Nav.Link>
                        <Nav.Link>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
    
}

export default navbar