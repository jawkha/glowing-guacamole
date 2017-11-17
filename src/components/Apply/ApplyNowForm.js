import React from "react";

/*
	In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

	We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".
*/
class ApplyNowForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      email: "",
      phone: "",
      ownComputer: "",
      location: "",
      source: "",
      education: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    console.log("Application Form submitted");
  }

  render() {
    return (
      <div className="application-form container py-5 col-md-8">
        <h2 className="text-center">Get in touch</h2>
        <form>
          <div className="form-group">
            <input
              className="form-control form-control-md"
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-md"
              onChange={this.handleChange}
              type="text"
              name="address"
              placeholder="Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-md"
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-md"
              onChange={this.handleChange}
              type="number"
              name="phone"
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group">
            <div className="form-group contact-form-location form-check-inline">
              <h5>Location:</h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="location"
                  value="Copenhagen"
                  id="location-choice-copenhagen"
                />
                &nbsp; Copenhagen &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="location"
                  value="Malmö"
                  id="location-choice-malmo"
                />
                &nbsp; Malmö
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="contact-form-computer-ownership form-check-inline">
              <h5>Do you have your own computer?</h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="ownComputer"
                  value="Yes"
                  id="computer-ownership-yes"
                />
                &nbsp; Yes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="ownComputer"
                  value="No"
                  id="computer-ownership-no"
                />
                &nbsp; No
              </label>
            </div>
          </div>
          <div className="form-group">
            <textarea
			id="apply-now-form-source-hyf"
              className="form-control"
              onChange={this.handleChange}
			  name="source"
			  placeholder="How did you hear about Hack Your Future?"
            />
          </div>
          <div className="form-group">
            <textarea
			id="apply-now-form-education"
              className="form-control"
              onChange={this.handleChange}
			  name="education"
			  placeholder="Educational Background"
            />
          </div>
          <div className="form-group text-center">
            <input
              className="form-control-sm btn btn-lg btn-outline-danger"
              onSubmit={this.handleSubmit}
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ApplyNowForm;
