import React from 'react';
import './Sphere.css';
import Star from '../Star/Star'

const Sphere = ({ stars }) => {

	const starsCollection = stars.map( star => {
		return(
			<Star name={ star.name } />
		)
	});

	return(
		<div className="sphere">
			{ starsCollection }
		</div>
	);

};

export default Sphere;