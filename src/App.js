import React, { Component } from 'react';
import AppNavbar from './AppNavbar/AppNavbar';
import Sphere from './Sphere/Sphere';
import InputRangeContainer from './InputRangeContainer/InputRangeContainer';
import './App.css';

const API = 'http://www.astropical.space/astrodb/api.php?';

class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      stars: [],
      magnitudeLimit: 3,
      clicked: false,
      prevCords: false
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
  };

  handleMouseDown() {
    this.setState({
      clicked: true
    });
  };

  handleMouseUp() {
    this.setState({
      clicked: false,
      prevCords: false
    });
  };

  handleMouseMove(e) {
    const sphere = document.querySelector('.sphere');
    const sphereSize = parseInt( window.getComputedStyle(sphere, null).getPropertyValue('width'), 0);

    if (this.state.clicked) {

      if (this.state.prevCords) {

        const diff = { x: this.state.prevCords.x - e.clientX, y: this.state.prevCords.y - e.clientY };

        this.setState( prevState => {
          stars: prevState.stars.map(star => {

            let newRA = 0;
            let diffRA = -diff.x / sphereSize * 12;

            if (star.ra + diffRA > 24) {
              newRA = star.ra + diffRA - 24;
            } else if (star.ra + diffRA < 0) {
              newRA = 24 + star.ra + diffRA;
            } else {
              newRA = star.ra + diffRA;
            };

            let newDE = 0;
            let diffDE = diff.y / sphereSize * 180;

            if (star.de + diffDE > 90) {
              newDE = 90 - (star.de + diffDE - 90);
              newRA = (newRA >= 0 && newRA <=12) ? (12 - newRA) + 12 : 24 - newRA;
            } else {
              newDE = (star.ra >= 0 && star.ra <=12) ? star.de + diffDE : star.de - diffDE;
            };

            star.ra = newRA;
            //star.de = newDE;
            
          })
        });

      };

      this.setState({
        prevCords: {x: e.clientX, y: e.clientY}
      });

    };

  }

  render() {
    return (
      <div className="App">

        <AppNavbar />

        <div className="container">

          <div className="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4 text-center">
            <InputRangeContainer 
              magnitudeLimit={ this.state.magnitudeLimit }
              onChange={ (value) => this.setState({ magnitudeLimit: value }) }
            />
          </div>

          <div className="col-xs-12">
            <Sphere 
              stars={ this.state.stars }
              magnitudeLimit={ this.state.magnitudeLimit }
              onMouseDown={ () => this.handleMouseDown() }
              onMouseUp={ () => this.handleMouseUp() }
              onMouseMove={  (e) => this.handleMouseMove(e) }
             />
          </div>

          </div>

      </div>
    );
  }
}

export default App;
