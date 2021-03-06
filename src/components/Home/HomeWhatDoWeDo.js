import React from 'react';
import { Link } from 'react-router-dom'

const HomeWhatDoWeDo = () => {
	return (
		<div className="home-what-do-we-do">
		<div className="container text-center py-5 col-md-8">
			<h2>WHAT DO WE DO?</h2>
			<p>We train refugees to become software-developers</p>
			<p>
				In our 6-month program we train talented refugees with and
				without a coding background in modern JavaScript software
				development. Our aim is to have our students land their first
				software development job after finishing our course, and we do
				everything we can to prepare them as well as possible. With our
				team of over 35 experienced senior developers we have created a
				program around the special needs of refugees. Our teachers are
				all volunteers, and we are all extremely passionate about
				coding. We believe talented refugees are a great opportunity for
				the software development world, we are here to give them a
				helping hand.
			</p>
			<Link to='/about' className="read-more-button btn">Read more</Link>
		</div>
		</div>
	);
};

export default HomeWhatDoWeDo;
