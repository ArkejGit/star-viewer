import React from 'react';
import { Navbar } from 'react-bootstrap';
import './AppNavbar.css';

const AppNavbar = () => {
	return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Star Viever</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
	);
};

export default AppNavbar;