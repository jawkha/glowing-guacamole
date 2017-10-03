import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			{/* <span className="icn-logo">
				<a href="#">
					<img
						src="src/images/logo/hyf-logo.svg"
						alt="organization logo"
					/>
				</a>
			</span> */}
			<ul className="main-nav">
				<li>
					<a href="#">ABOUT US</a>
				</li>
				<li>
					<a href="#">APPLY NOW</a>
				</li>
				<li>
					<a href="#">SUPPORT US</a>
				</li>
				<li>
					<a href="#">CONTACT</a>
				</li>
				<li>
					<a href="#">
						<button className="donate-button">DONATE</button>
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
