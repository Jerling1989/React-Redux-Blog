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
				<div className="col s12 m6" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						<div class="card blue-grey darken-1 z-depth-3">
			        <div class="card-content white-text">
			          <span class="card-title">{post.title}</span>
			          <p>{post.content.substring(0, 44)}...</p>
			        </div>
			      </div>
					</Link>
				</div>
			);
		});
	}
	// REACT RENDOR METHOD
	render() {
		return (
			<div>
				<div className="">
					<Link className="btn-floating btn-large waves-effect waves-light teal" to="/posts/new">
						<i className="material-icons">create</i>
					</Link>
				</div>
				<h3 className="center-align">All Posts</h3>
				<div className="row">
					{this.renderPosts()}
				</div>
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