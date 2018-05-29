// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
		return (
			<div>
				Posts Show!
			</div>
		);
	}
}

// BIND APP STATE PROPS TO COMPONENT
function mapStateToProps({ posts }, ownProps) {
	// RETURN THE POST WITH MATCHING ID
	return { posts: posts[ownProps.match.params.id] };
}

// EXPORT POSTSSHOW COMPONENT
export default connect(mapStateToProps, { fetchPost })(PostsShow);