// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
// IMPORT PACKAGES
import _ from 'lodash';
// IMPORT ACTION CREATOR
import { fetchPosts } from '../actions';

// CREATE POSTSINDEX CLASS COMPONENT
class PostsIndex extends Component {
	// METHOD TO RUN WHENEVER THE COMPONENT IS RENDERED TO THE DOM
	componentDidMount() {
		this.props.fetchPosts();
	}
	// RENDER POSTS HELPER FUNCTION
	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		});
	}
	// REACT RENDOR METHOD
	render() {
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

// ADD APPLICATION LEVEL STATE(REDUX) TO COMPONENT
function mapsStateToProps(state) {
	return { posts: state.posts };
}

// EXPORT POSTSINDEX COMPONENT
// ATTACH ACTION CREATOR WITH PROPS TO COMPONENT
export default connect(mapsStateToProps, { fetchPosts })(PostsIndex);