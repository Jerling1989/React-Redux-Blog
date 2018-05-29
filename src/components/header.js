// IMPORT OBJECTS AND METHODS
import React, { Component } from 'react';

// CREATE POSTSSHOW CLASS COMPONENT
class Header extends Component {
	// REACT RENDER METHOD
	render() {
		// RETURN
		return (
			<div className="center-align blog-header">
				<br />
				<h1><span className="react">React</span> <span className="redux">Redux</span> <span className="blog">Blog</span></h1>
			</div>
		);
	}
}

export default Header;