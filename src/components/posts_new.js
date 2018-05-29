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
			</div>
		);
	}
	// REACT RENDER METHOD
	render() {
		return (
			<form>
				<Field
					label="Title"
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














