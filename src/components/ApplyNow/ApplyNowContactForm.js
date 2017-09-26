import React from 'react';


const ApplyNowContactForm = () => {
    return(
        <div classname="contact-form">
        <p>Want to apply? Please fill in your details below and we will contact you about the further steps in the <br/>
        application process.</p>;

        <label>Name</label>
        <input type="text" class="form-control" placeholder="Name" id="name" required="" data-validation-required-message="write your name here please">
        <p class="help-block text-danger"></p>;


        <label>Address</label>
        <input type="text" class="form-control" placeholder="Address" id="address" required="" data-validation-required-message="write your addrress here please">
        <p class="help-block text-danger"></p>;

        <label>Email Address</label>
        <input type="email" class="form-control" placeholder="Email" id="email" required="" data-validation-required-message="write your email here please">
        <p class="help-block text-danger"></p>;

        <label>Phone</label>
        <input type="text" class="form-control" placeholder="Phone" id="ohone" required="" data-validation-required-message="write your phones number here please">
        <p class="help-block text-danger"></p>;


        <label>Do you have your own computer? </label>
        <br>
         <input type="radio" class="radioBtnClass"> Yes;
        <input type="radio" class="radioBtnClass" > No;
        <p class="help-block text-danger"></p>;

        <label>Location: </label>
        <br>
         <input type="radio" class="radioBtnClass" name="location" required="" value="Amsterdam"> Amsterdam &nbsp;
        <input type="radio" class="radioBtnClass" name="location" required="" value="Copenhagen"> Copenhagen
        <input type="radio" class="radioBtnClass" name="location" required="" value="Malmö"> Malmö
        <p class="help-block text-danger"></p>;

        <label>Educational Background</label>
         <textarea rows="5" class="form-control" placeholder="Educational Background" id="educational background" required="" data-validation-required-message="write here your educational background please"></textarea>
         <p class="help-block text-danger"></p>;

       </div>;
    );
}






 