// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
					<Link to={`/posts/${post.id}`}>
						{post.title} | {post.content.substring(0, 44)}...
					</Link>
				</li>
			);
		});
	}
	// REACT RENDOR METHOD
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn-floating btn-large waves-effect waves-light red" to="/posts/new">
						<i className="material-icons">add</i>
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group-flush">
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