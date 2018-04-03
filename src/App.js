import React, { Component } from 'react';
import AppNavbar from './AppNavbar/AppNavbar';
import Sphere from './Sphere/Sphere';
import './App.css';

const API = 'http://www.astropical.space/astrodb/api.php?';

class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      stars: [],
      magnitudeLimit: 3
    }

    this.getStars();
  }

  /**
 * getStars()
 *
 * Fetches data from API, converts it to Array and save it to state.stars
 *
 * @return {type} Description.
 */
  getStars() {
    fetch(`${API}table=stars&which=magnitude&limit=4.97&format=json`)
      .then( res => res.json() )
      .catch( err => console.log( err ) )
      .then( data => {
        const stars = Object.keys(data.hipstars).map(key => data.hipstars[key]);
        this.setState({
          stars: stars
        })
        console.log( this.state.stars );
      });
  }

  render() {
    return (
      <div className="App">

        <AppNavbar />

        <div className="container">

          <Sphere 
            stars={ this.state.stars }
            magnitudeLimit={ this.state.magnitudeLimit }
           />

        </div>

      </div>
    );
  }
}

export default App;
