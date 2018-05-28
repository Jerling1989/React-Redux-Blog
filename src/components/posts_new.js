// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// CREATE POSTSNEW CLASS COMPONENT
class PostsNew extends Component {
	// RENDERTITLEFIELD HELPER FUNCTION
	renderTitleField(field) {
		return (
			<div>
				<input
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
					name="title"
					component={this.renderTitleField}
				/>
			</form>
		);
	}
}

// EXPORT POSTSNEW COMPONENT
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);