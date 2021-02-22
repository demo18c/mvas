import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IvasImage from './image/ivas.png';

const Header = () => {
	return (
		<Navbar bg="secondary" expand="lg">
			<Navbar.Brand href="/">
				<img src={IvasImage} width="75" height="100" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/About">About</Nav.Link>
					<NavDropdown title="Products" id="basic-nav-dropdown">
						<NavDropdown.Item href="Over View">Over View</NavDropdown.Item>
						<NavDropdown.Item href="/Cube">Ivas Radio</NavDropdown.Item>
						<NavDropdown.Item href="/Voy">Voyager</NavDropdown.Item>
						<NavDropdown.Item href="/Three">Three</NavDropdown.Item>
						<NavDropdown.Divider />
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
