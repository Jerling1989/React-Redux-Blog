// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// IMPORT ACTION CREATOR
import { fetchPost, deletePost } from '../actions';

// CREATE POSTSSHOW CLASS COMPONENT
class PostsShow extends Component {
	// LIFECYCLE TO RUN ONCE COMPONENT RENDERS
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}
	// DELETE POST HELPER FUNCTION
	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}
	// REACT RENDER METHOD
	render() {
		// CREATE POST OBJECT
		const { post } = this.props;
		// SHOW LOADING MESSAGE WHILE POST LOADS
		if (!post) {
			return <div>Loading...</div>;
		}
		// RETURN
		return (
			<div>
				<Link to="/">Back to Index</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete Post
				</button>
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
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);















