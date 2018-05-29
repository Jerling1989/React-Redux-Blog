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
					label="Tags"
					name="tags"
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

// EXPORT POSTSNEW COMPONENT
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);