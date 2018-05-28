// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// CREATE POSTSNEW CLASS COMPONENT
class PostsNew extends Component {


	// REACT RENDER METHOD
	render() {
		return (
			<form>
				<Field
					name="title"
					component={}
				/>
			</form>
		);
	}
}

// EXPORT POSTSNEW COMPONENT
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);