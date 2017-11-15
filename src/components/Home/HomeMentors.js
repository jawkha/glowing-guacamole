import React from 'react';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

import mentors from './../../data/mentors.json';

// The mentors file can be maintained as a JSON file and can be imported here by using the map method
const HomeMentors = () => {
	return (
		<div className="home-mentors container-fluid py-5">
			<h2 className="text-center">Mentors</h2>

			<div className="row core-team-row text-center justify-content-center">
		
			{mentors.map(mentor => (
				<div key={mentor.id} className="col-md-2 col-sm-4 col-xs-7">
				<img className="img rounded-circle" width="130px" src={mentor.photo} alt={mentor.name}></img>
				<p>{mentor.name}</p>
				<a href={mentor.linkedin} target="_blank"><FaLinkedinSquare /></a>
				</div>
			))}
			</div>
					
		</div>
	);
};

export default HomeMentors;
