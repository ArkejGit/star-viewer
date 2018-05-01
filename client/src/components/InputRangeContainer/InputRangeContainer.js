import React from 'react';
import InputRange from 'react-input-range';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'react-input-range/lib/css/index.css';
import './InputRangeContainer.css';

const tooltip = (
  <Tooltip id="tooltip">
    <p>In astronomy, magnitude is a logarithmic measure of the brightness of an object.</p>
    <p>The brighter an object appears, the lower the value of its magnitude.</p>
  </Tooltip>
);

const InputRangeContainer = ({ magnitudeLimit, onChange }) => {
  return(
    <div>

      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <p>Magnitude</p>
      </OverlayTrigger>

        <div className="input-range-container">
          <span className="glyphicon glyphicon-star glyphicon-big"></span>
          <InputRange
            maxValue={5}
            minValue={0}
            step={0.5}
            value={ magnitudeLimit }
            onChange={ value => onChange(value) }
          />
          <span className="glyphicon glyphicon-star"></span>
        </div>

    </div>
  )
};

export default InputRangeContainer;