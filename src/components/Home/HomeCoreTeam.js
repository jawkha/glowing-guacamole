import React from 'react';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';

import coreteam from './../../data/coreteam.json';

const HomeCoreTeam = () => {
	return (
		<div className="home-core-team container-fluid py-5">
			<h2 className="text-center">Core Team</h2>
			<div className="row core-team-row text-center">

			{coreteam.map(member => (
				<div key={member.id} className="col-md-2 col-sm-4 col-xs-7 container-fluid">
				<img className="img rounded-circle" width="130px" src={member.photo} alt={member.name}></img>
					<p>{member.name}</p>
					<p>{member.role}</p>
					<a href={member.email}><FaEnvelopeSquare /></a>
					<a href={member.linkedin}><FaLinkedinSquare /></a>
				</div>
			))}
			</div>
			
		</div>
	);
};

export default HomeCoreTeam;
