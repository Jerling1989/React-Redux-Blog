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
		// RETURN
		return (
			<div className="input-field">
				<i className="material-icons prefix">{field.icon}</i>
				<input
					placeholder={field.label}
					type="text"
					{...field.input}
				/>
				{/* TURNARY OPERATOR FOR ERROR DISPLAY */}
				<div className="red-text">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	renderTextarea(field) {
		const { meta: { touched, error } } = field;
		// RETURN
		return (
			<div className="input-field">
				<i className="material-icons prefix">{field.icon}</i>
				<textarea
					className="materialize-textarea"
					placeholder={field.label}
					type="text"
					{...field.input}
				></textarea>
				{/* TURNARY OPERATOR FOR ERROR DISPLAY */}
				<div className="red-text">
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
			<form autoComplete="off" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			<h3 className="center-align">Create New Post</h3>
				<Field
					icon="title"
					label="Post Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					icon="label"
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					icon="subject"
					label="Post Content"
					name="content"
					component={this.renderTextarea}
				/>
				<button type="submit" className="waves-effect waves-light btn teal">Submit</button>
				<Link to="/" className="waves-effect waves-light btn red">Cancel</Link>
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
