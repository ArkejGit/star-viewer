import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './AppNavbar.css';

const AppNavbar = () => {
	return(
	<Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">Star Viewer</Link>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
			<LinkContainer to='/about'>
				<NavItem className="nav-link">About</NavItem>
			</LinkContainer>
		</Nav>
	</Navbar>
	);
};

export default AppNavbar;