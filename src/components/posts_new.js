// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// CREATE POSTSNEW CLASS COMPONENT
class PostsNew extends Component {
	// RENDERFIELD HELPER FUNCTION
	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				{/* TURNARY OPERATOR FOR ERROR DISPLAY */}
				{field.meta.touched ? field.meta.error : ''}
			</div>
		);
	}
	// ONSUBMIT FUNCTION
	onSubmit(values) {
		console.log(values);
	}
	// REACT RENDER METHOD
	render() {
		// GET HANDLESUBMIT PROP THAT'S PASSED TO COMPONENT FROM REDUX FORM
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Post Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

// FUNCTION TO VALIDATE FORM FIELDS HAVE BEEN FILLED OUT
function validate(values) {
	// CREATE ERRORS OBJECT
	const errors = {};

	// VALIDATE THE INPUTS FROM 'VALUES'
	if (!values.title) {
		errors.title = 'Enter a title!';
	}
	if (!values.categories) {
		errors.categories = 'Enter some categories!';
	}
	if (!values.content) {
		errors.content = 'Enter some content!';
	}

	// RETURN ERRORS OBJECT
	return errors;
}

// EXPORT POSTSNEW COMPONENT
export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);














