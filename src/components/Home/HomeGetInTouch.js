import React from 'react';

/*
	In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

	We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".
*/
class HomeGetInTouch extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			location: '',
			message: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit() {
		console.log('Form submitted');
	}

	render() {
		return (
			<div className="home-contact-form">
				<h2>Get in touch</h2>
				<form>
					<input
						onChange={this.handleChange}
						type="text"
						name="name"
						placeholder="name"
						required
					/>
					<input
						onChange={this.handleChange}
						type="text"
						name="email"
						placeholder="email"
						required
					/>
					<div className="contact-form-location">
						<label>
							Copenhagen
							<input
								onChange={this.handleChange}
								type="radio"
								name="location"
								value="Copenhagen"
								id="location-choice-copenhagen"
							/>
						</label>
						<label>
							Malmö
							<input
								onChange={this.handleChange}
								type="radio"
								name="location"
								value="Malmö"
								id="location-choice-malmo"
							/>
						</label>
					</div>
					<textarea onChange={this.handleChange} name="message" />
					<input
						onSubmit={this.handleSubmit}
						type="submit"
						value="submit"
					/>
				</form>
			</div>
		);
	}
}

export default HomeGetInTouch;
