import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Star Viever</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>;

        <p>Star Viewer</p>
      </div>
    );
  }
}

export default App;
