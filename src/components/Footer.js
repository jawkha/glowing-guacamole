import React from 'react';

const Footer = () => {
	return (
		<footer className="footer text-center my-8 py-8">
				<p>HackYourFuture</p>
				<p>CVR: 38533193</p>
				<p>Address: Enghavevej 80-82, 3. sal, 2450 København SV</p>
				<p>Contact: <a href="mailto:cph@hackyourfuture.net">cph@hackyourfuture.net</a></p>
				<p>Copyright © Hack Your Future {new Date().getFullYear()}</p>
		</footer>
	);
};

export default Footer;