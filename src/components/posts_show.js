// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// IMPORT ACTION CREATOR
import { fetchPost } from '../actions';

// CREATE POSTSSHOW CLASS COMPONENT
class PostsShow extends Component {
	// LIFECYCLE TO RUN ONCE COMPONENT RENDERS
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}
	// REACT RENDER METHOD
	render() {
		// CREATE POST OBJECT
		const { post } = this.props;

		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to Index</Link>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

// BIND APP STATE PROPS TO COMPONENT
function mapStateToProps({ posts }, ownProps) {
	// RETURN THE POST WITH MATCHING ID
	return { post: posts[ownProps.match.params.id] };
}

// EXPORT POSTSSHOW COMPONENT
export default connect(mapStateToProps, { fetchPost })(PostsShow);