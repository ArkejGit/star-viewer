import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './InputRangeContainer.css'

const InputRangeContainer = ({ magnitudeLimit, onChange }) => {
  return(
    <div>
      <p>Magnitude</p>
          <div className="input-range-container">
            <span className="glyphicon glyphicon-star glyphicon-big"></span>
            <InputRange
              maxValue={5}
              minValue={0}
              value={ magnitudeLimit }
              onChange={ value => onChange(value) }
            />
            <span className="glyphicon glyphicon-star"></span>
          </div>
    </div>
  )
};

export default InputRangeContainer;