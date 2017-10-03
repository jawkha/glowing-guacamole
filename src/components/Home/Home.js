import React from 'react';

// COMPONENTS
import HomeBannerImage from './HomeBannerImage';
import HomeWhatDoWeDo from './HomeWhatDoWeDo';
import HomeWeAreLookingFor from './HomeWeAreLookingFor';
import HomeCoreTeam from './HomeCoreTeam';
import HomeMentors from './HomeMentors';
import HomeSponsors from './HomeSponsors';
import HomeMediaCoverage from './HomeMediaCoverage';
import HomeGetInTouch from './HomeGetInTouch';

const Home = () => {
	return (
		<div className="home">
			{/* <img id="myelement" src="/photos/yesCPH.svg"  class="any-class-you-wish"/> */}
			<HomeBannerImage />
			<HomeWhatDoWeDo />
			<HomeWeAreLookingFor />
			<HomeCoreTeam />
			<HomeMentors />
			<HomeSponsors />
			<HomeMediaCoverage />
			<HomeGetInTouch />
		</div>
	);
};

export default Home;
