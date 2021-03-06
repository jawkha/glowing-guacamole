import React from 'react';
import { Link } from 'react-router-dom';
import DonateModal from './../DonateModal';

const HomeWeAreLookingFor = () => {
	return (
		<div className="home-we-are-looking-for container py-5">
			<h2 className="text-center">We are currently looking for</h2>

			<div className="row container text-center">
				<div className="col-md-4 col-sm-4 container">
					<img className="img rounded-circle" width="150px" src="src/images/icons/hand-shake.png" alt="hand shake image"></img>
					<h3>Sponsors</h3>
					<p>
						We believe that this generation of refugees has great
						potential. Help us maximize their potential with your
						donation.
					</p>
					<DonateModal className="nav-item nav-link" bootstrapProps={'btn btn-outline-danger'}/>
				</div>
				<div className="col-md-4 col-sm-4 container">
				<img className="img rounded-circle" height="150px" src="src/images/icons/teacher-jim.png" alt="mentor image"></img>
					<h3>Code Mentors</h3>
					<p>
						We’re looking for web-developers with experience with
						Javascript and related frameworks
					</p>
					<Link to='/contact' className="btn btn-outline-danger">GET IN TOUCH</Link>
				</div>
				<div className="col-md-4 col-sm-4 container">
				<img className="img rounded-circle" height="150px" src="src/images/icons/laptop-green.png" alt="laptop image"></img>
					<h3>Laptops</h3>
					<p>
						Does your organization have laptops up for donation? Our
						student could really use them.
					</p>
					<Link to='/contact' className="btn btn-outline-danger">GET IN TOUCH</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeWeAreLookingFor;
