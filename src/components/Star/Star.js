import React from 'react';
import './Star.css';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

/**
 * calculatePositionOfStar(ra,de)
 *
 * Takes two basic astronomical coordinates of a star (right ascension & declination) and returns distances from top and left of Sphere container (expressed as a percentage of entire container's width).
 *
 * @param {Number}   ra     Right ascension
 * @param {Number}   de     Declination
 * 
 * @return {Object}     Object with two properties: {String} top, {String} left
 */
const calculatePositionOfStar = (ra, de) => {

	// calculate top
	const top = `${50 - 50/90 * de}%`;

	// calculate left
	const h = 1 - 1/90 * Math.abs(de);
	const chordWidth = 2 * Math.sqrt( 2 * h - h * h );
	const raAsPercentage = ra * 100/12;
	const left = `${ (100 - chordWidth * 50) / 2 + chordWidth * 0.5 * raAsPercentage }%`;

	return { top: top, left: left };
};


const Star = ({ name, ra, de }) => {

	const { top, left } = calculatePositionOfStar( ra, de );

	const tooltip = (
	  <Tooltip id="tooltip">
	    <p>{ name ? name : 'unknown name' }</p>
	  </Tooltip>
	);
	
	return(
		<OverlayTrigger placement="top" overlay={tooltip}>        
			<div className='star'
				style={{ top: top, left: left, display: `${ ra > 12 ? 'none' : 'block' }` }}>
			</div>
 		</OverlayTrigger>
	);

};

export default Star;