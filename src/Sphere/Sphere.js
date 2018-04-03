import React from 'react';
import './Sphere.css';
import Star from '../Star/Star'

const Sphere = ({ stars, magnitudeLimit }) => {

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
		<div className="sphere">
			{ starsCollection }
		</div>
	);

};

export default Sphere;