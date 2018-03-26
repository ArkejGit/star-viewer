import React, { Component } from 'react';
import AppNavbar from './AppNavbar/AppNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppNavbar />

        <div className="container text-center">
          <div className="sphere"></div>
        </div>

      </div>
    );
  }
}

export default App;
