import React from 'react';

const AboutHowCanYouHelp = () => {
	return (
		<div className="how-can-you-help container text-center">
			<h2>How can you help?</h2>
			<p>
				<strong>Volunteer</strong> We’re always looking for experienced
				developers who love to teach their skills to our students. Our
				team of volunteers is a positive and focused group of people who
				simply love to code and share their knowledge.
			</p>
			<button className="btn btn-outline-danger">START TEACHING</button>
			<p>
				<strong>Donate</strong> In order to run our school we’re looking
				for extra funds to better facilitate our students in their
				career (travel expenses, laptops, software). You can donate via
				our donate button below, or contact us if you have laptops to
				donate. Your donation is much appreciated!
			</p>
			<button className="btn btn-outline-danger">DONATE</button>
		</div>
	);
};

export default AboutHowCanYouHelp;
