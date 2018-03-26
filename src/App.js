import React, { Component } from 'react';
import AppNavbar from './AppNavbar/AppNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppNavbar />

        <p>Star Viewer</p>
        
      </div>
    );
  }
}

export default App;
