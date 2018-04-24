import React, { Component } from 'react';
import AppNavbar from './AppNavbar/AppNavbar';
import Sphere from './Sphere/Sphere';
import InputRangeContainer from './InputRangeContainer/InputRangeContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const API = 'http://www.astropical.space/astrodb/api.php?';

const Home = ({ magnitudeLimit, stars, onMouseDown, onMouseUp, onMouseOut, onMouseMove, onChange }) => {

  return(
    <div>
      <div className="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4 text-center">
      <InputRangeContainer 
      magnitudeLimit={ magnitudeLimit }
      onChange={ onChange }
      />
      </div>

      <div className="col-xs-12">
      <Sphere 
      stars={ stars }
      magnitudeLimit={ magnitudeLimit }
      onMouseDown={ onMouseDown }
      onMouseUp={ onMouseUp }
      onMouseOut={ onMouseOut }
      onMouseMove={ onMouseMove }
      />
      </div>
    </div>
  )
};

const About = () => {
  return(
    <div>
      <p>This is the About page.</p>
    </div>
  )
};

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
        });
        return true;
      });
  };

  /**
  * sphereClick()
  *
  * Sets state.clicked to true
  */
  sphereClick() {
    this.setState({
      clicked: true
    });
  };

  /**
  * sphereUnclick()
  *
  * Sets state.clicked and state.prevCords to false
  */
  sphereUnclick() {
    this.setState({
      clicked: false,
      prevCords: false
    });
  };

  /**
  * handleMouseMove()
  *
  * @param {Event Object}   e   Mouse move event object
  *
  * Calculates the change of right ascension for every star, based on user's mouse move, and sets it to the state
  */
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

            star.ra = newRA;            
          });
        });

      };

      this.setState({
        prevCords: {x: e.clientX, y: e.clientY}
      });

    };

  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <AppNavbar />
          
          <div className="container">

            <Route 
              exact path='/'  
              render={() => <Home
                magnitudeLimit={ this.state.magnitudeLimit }
                stars={ this.state.stars }
                onMouseDown={ () => this.sphereClick() }
                onMouseUp={ () => this.sphereUnclick() }
                onMouseOut={ () => this.sphereUnclick() }
                onMouseMove={ (e) => this.handleMouseMove(e) }
                onChange={ (value) => this.setState({ magnitudeLimit: value }) }
                />} 
            />

            <Route
              path='/about'
              component={About}
            />

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
