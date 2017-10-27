import React from 'react';

// The media coverage file can be maintained as a JSON file and can be imported here by using the map method
const HomeMediaCoverage = () => {
	return (
		<div className="home-media-coverage container text-center py-5">
			<h2 className="text-center">In the news</h2>

			<div className="row media-coverage-row">
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

export default HomeMediaCoverage;
