import React from 'react';
import Sphere from '../Sphere/Sphere';
import InputRangeContainer from '../InputRangeContainer/InputRangeContainer';

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

export default Home;