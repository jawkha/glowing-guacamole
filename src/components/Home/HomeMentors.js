import React from 'react';

// The mentors file can be maintained as a JSON file and can be imported here by using the map method
const HomeMentors = () => {
	return (
		<div className="home-mentors">
			<h2>Mentors</h2>

			<div className="row mentors-row">
				<div className="col-md-2 col-sm-4 col-xs-7">
					<div>IMAGE-PLACEHOLDER</div>
					<h3>ABC</h3>
					<h3>Javascript Developer</h3>
					<button>LinkedIn Profile Link</button>
					<button>Mail Link</button>
				</div>

				<div className="col-md-2 col-sm-4 col-xs-7">
					<div>IMAGE-PLACEHOLDER</div>
					<h3>ABC</h3>
					<h3>React Developer</h3>
					<button>LinkedIn Profile Link</button>
					<button>Mail Link</button>
				</div>
				<div className="col-md-2 col-sm-4 col-xs-7">
					<div>IMAGE-PLACEHOLDER</div>
					<h3>ABC</h3>
					<h3>Node Developer</h3>
					<button>LinkedIn Profile Link</button>
					<button>Mail Link</button>
				</div>
			</div>
		</div>
	);
};

export default HomeMentors;
