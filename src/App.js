import React, { Component } from 'react';
import AppNavbar from './AppNavbar/AppNavbar';
import Sphere from './Sphere/Sphere';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
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
 * @return {Boolean} Returns false in case of error, otherwise returns true.
 */
  getStars() {
    fetch(`${API}table=stars&which=magnitude&limit=4.97&format=json`)
      .then( res => res.json() )
      .catch( err => {
        console.log( err );
        return false;
      })
      .then( data => {
        const stars = Object.keys(data.hipstars).map(key => data.hipstars[key]);
        this.setState({
          stars: stars
        })
        console.log( this.state.stars );
        return true;
      });
  }

  render() {
    return (
      <div className="App">

        <AppNavbar />

        <div className="container">

        <div className="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4 text-center">
          <p>Magnitude</p>
          <div className="input-range-container">
            <span class="glyphicon glyphicon-star glyphicon-big"></span>
            <InputRange
              maxValue={5}
              minValue={0}
              value={this.state.magnitudeLimit}
              onChange={value => this.setState({ magnitudeLimit: value })}
            />
            <span class="glyphicon glyphicon-star"></span>
            </div>
        </div>

        <div className="col-xs-12">
          <Sphere 
            stars={ this.state.stars }
            magnitudeLimit={ this.state.magnitudeLimit }
           />
        </div>

        </div>

      </div>
    );
  }
}

export default App;
