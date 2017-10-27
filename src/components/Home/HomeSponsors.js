import React from 'react';

// The sponsors file can be maintained as a JSON file and can be imported here by using the map method
const HomeSponsors = () => {
	return (
		<div className="home-sponsors container text-center py-5 col-md-9">
			<h2>Sponsors</h2>

			<div className="row sponsors-row text-center">
				<div className="col-md-2 col-sm-4 col-xs-7 container-fluid">
					<div>IMAGE-PLACEHOLDER</div>
					<h3>ABC</h3>
					<button>Link</button>
				</div>

				<div className="col-md-2 col-sm-4 col-xs-7 container-fluid">
					<div>IMAGE-PLACEHOLDER</div>
					<h3>ABC</h3>
					<button>Link</button>
				</div>

				<div className="col-md-2 col-sm-4 col-xs-7 container-fluid">
					<div>IMAGE-PLACEHOLDER</div>
					<h3>ABC</h3>
					<button>Link</button>
				</div>
			</div>
		</div>
	);
};

export default HomeSponsors;
