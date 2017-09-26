import React from 'react';

// COMPONENTS
 import ApplyNowContactForm from './ApplyNowContactForm';
 import ApplyNowWantToJoinUs from './ApplyNowWantToJoinUs';


 const ApplyNow =  () => {
      return(
          <div className="applynow">
              <ApplyNowContactForm/>
              <ApplyNowWantToJoinUs/>
          </div>
      );

 };
export default ApplyNow;