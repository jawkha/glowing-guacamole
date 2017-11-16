import React from 'react';

// COMPONENTS
import ApplyNowBannerImage from './ApplyNowBannerImage';
import ApplyWantToJoinUs from './ApplyWantToJoinUs';
import ApplyNowForm from './ApplyNowForm';

const Apply = () => {
	return (
		<div className="apply-now container-fluid py-5 my-5">
			<ApplyNowBannerImage />
			<ApplyWantToJoinUs />
			<ApplyNowForm />
		</div>
	);
};

export default Apply;