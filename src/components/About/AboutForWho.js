import React from 'react';
import { Link } from 'react-router-dom'

const AboutForWho = () => {
	return (
		<div className="for-who container text-center py-5 col-md-8">
			<h2>For who?</h2>
			<p>
				We teach to talented refugees who want to start their career in
				web-development. We’re looking for people who are very motivated
				and are willing to put in a lot of hours in order to become
				great at coding. You will need to have an intermediate level in
				English and you will need to study for around 25 hours per week.
				We accept people living all over the Netherlands, and we pay for
				transportation costs (train tickets).
			</p>
			<Link to='/apply' className="btn btn-outline-danger">APPLY NOW</Link>
		</div>
	);
};

export default AboutForWho;
