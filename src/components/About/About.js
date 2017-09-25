import React from 'react';

// COMPONENTS
import AboutWhatIsHYF from './AboutWhatIsHYF';
import AboutWhyHYF from './AboutWhyHYF';
import AboutWhatDoWeTeach from './AboutWhatDoWeTeach';
import AboutForWho from './AboutForWho';
import AboutWhoTeaches from './AboutWhoTeaches';
import AboutHowCanYouHelp from './AboutHowCanYouHelp';

const About = () => {
	return (
		<div className="about">
			<AboutWhatIsHYF />
			<AboutWhyHYF />
			<AboutWhatDoWeTeach />
			<AboutForWho />
			<AboutWhoTeaches />
			<AboutHowCanYouHelp />
		</div>
	);
};

export default About;
