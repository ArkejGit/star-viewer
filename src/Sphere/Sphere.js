import React from 'react';
import './Sphere.css';
import Star from '../Star/Star'

const Sphere = ({ stars }) => {

	const starsCollection = stars.map( star => {
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