import React, { Component } from 'react';
import AppNavbar from './AppNavbar/AppNavbar';
import './App.css';

const API = 'http://www.astropical.space/astrodb/api.php?';

class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      stars: []
    }

    this.getStars( 1 );
  }

  getStars( magnitude ) {
    fetch(`${API}table=stars&which=magnitude&limit=${magnitude}&format=json`)
      .then( res => res.json() )
      .catch( err => console.log( err ) )
      .then( data => {
        this.setState({
          stars: data.hipstars
        })
        console.log( this.state.stars );
      });
  }

  render() {
    return (
      <div className="App">

        <AppNavbar />

        <div className="container">
          <div className="sphere"></div>
        </div>

      </div>
    );
  }
}

export default App;
