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
				<Link to="/"><h6>Back to Home Page</h6></Link>
				<button
					className="btn-floating btn-large waves-effect waves-light red"
					onClick={this.onDeleteClick.bind(this)}
				>
					<i className="material-icons">delete</i>
				</button>
				<h3 className="center-align">{post.title}</h3>
				<h5>Categories: {post.categories}</h5>
				<br />
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
