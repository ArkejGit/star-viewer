import React from 'react';
import './Sphere.css';
import Star from '../Star/Star'

const Sphere = ({ stars, magnitudeLimit, onMouseDown, onMouseUp, onMouseOut, onMouseMove }) => {

	const starsCollection = stars.filter(star => star.mag < magnitudeLimit ).map( star => {
		return(
			<Star 
				name={ star.name }
				key={ star.id }
				ra={ star.ra }
				de={ star.de }
			/>
		)
	});

	return(
		<div className="sphere"
			onMouseDown={ onMouseDown }
			onMouseUp={ onMouseUp }
			onMouseMove={ onMouseMove }
			onMouseOut={ onMouseOut }
		>
			{ starsCollection }
		</div>
	);

};

export default Sphere;