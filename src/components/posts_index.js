// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
// IMPORT ACTION CREATOR
import { fetchPosts } from '../actions';

// CREATE POSTSINDEX CLASS COMPONENT
class PostsIndex extends Component {
	// METHOD TO RUN WHENEVER THE COMPONENT IS RENDERED TO THE DOM
	componentDidMount() {
		this.props.fetchPosts();
	}

	// REACT RENDOR METHOD
	render() {
		return (
			<div>
				Posts Index
			</div>
		);
	}
}

// EXPORT POSTSINDEX COMPONENT
// ATTACH ACTION CREATOR WITH PROPS TO COMPONENT
export default connect(null, { fetchPosts })(PostsIndex);