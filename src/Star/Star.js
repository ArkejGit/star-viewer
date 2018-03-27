import React from 'react';
import './Star.css';

const Star = ({ name, ra, de }) => {

	const calculatePositionOfStar = (ra, de) => {

		const sphere = document.querySelector('.sphere');
		const sphereWidth = parseInt( window.getComputedStyle(sphere, null).getPropertyValue('width'), 0);

		// calculate top
		const top = `${50 - 0.555 * de}%`;

		// calculate left
		const h = 1 - 0.011 * Math.abs(de);
		const chordWidth = 2 * Math.sqrt( 2 * h - h * h );
		const raAsPercentage = ra * 8.333;
		const left = `${ (100 - chordWidth * 50) / 2 + chordWidth * 0.5 * raAsPercentage }%`;

		return { top: top, left: left };
	};

	const { top, left } = calculatePositionOfStar( ra, de );
	
	return(
		<div className='star'
			style={{ top: top, left: left, display: `${ ra > 12 ? 'none' : 'block' }` }}>
		</div>
	);

};

export default Star;