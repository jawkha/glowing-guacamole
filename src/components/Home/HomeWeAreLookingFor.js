import React from 'react';

const HomeWeAreLookingFor = () => {
	return (
		<div className="home-we-are-looking-for">
			<h2>We are currently looking for:</h2>

			<div className="row">
				<div className="col-md-4 col-sm-4">
					<div>ICON-PLACEHOLDER</div>
					<h3>Sponsors</h3>
					<p>
						We believe that this generation of refugees has great
						potential. Help us maximize their potential with your
						donation.
					</p>
					<button>DONATE</button>
				</div>
				<div className="col-md-4 col-sm-4">
					<div>ICON-PLACEHOLDER</div>
					<h3>Code Mentors</h3>
					<p>
						We’re looking for web-developers with experience with
						Javascript and related frameworks
					</p>
					<button>GET IN TOUCH</button>
				</div>
				<div className="col-md-4 col-sm-4">
					<div>ICON-PLACEHOLDER</div>
					<h3>Laptops</h3>
					<p>
						Does your organization have laptops up for donation? Our
						student could really use them.
					</p>
					<button>GET IN TOUCH</button>
				</div>
			</div>
		</div>
	);
};

export default HomeWeAreLookingFor;
