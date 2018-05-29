// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// IMPORT ACTION CREATOR
import { createPost } from '../actions';

// CREATE POSTSNEW CLASS COMPONENT
class PostsNew extends Component {
	// RENDERFIELD HELPER FUNCTION
	renderField(field) {
		const { meta: { touched, error } } = field;
		// CLASSNAME VARIABLE WITH TURNARY OPERATE FOR FORM FIELD OUTLINE COLOR
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				{/* TURNARY OPERATOR FOR ERROR DISPLAY */}
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}
	// ONSUBMIT FUNCTION
	onSubmit(values) {
		// RUN CREATEPOST ACTION CREATOR WITH CALLBACK FUNCTION TO NAVIGATE TO HOME PAGE
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}
	// REACT RENDER METHOD
	render() {
		// GET HANDLESUBMIT PROP THAT'S PASSED TO COMPONENT FROM REDUX FORM
		const { handleSubmit } = this.props;

		return (
			<form autocomplete="off" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
				<Link to="/" className="btn btn-danger">Cancel</Link>
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
})(
	connect(null, { createPost })(PostsNew)
);














