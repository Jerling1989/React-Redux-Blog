// IMPORT PACKAGES
import _ from 'lodash';
// IMPORT TYPE VARIABLES
import { FETCH_POSTS, FETCH_POST } from '../actions';

// CREATE POSTSREDUCER
export default function(state = {}, action) {
	switch (action.type) {

		case FETCH_POST:
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post;
			// return newState;
			return { ...state, [action.payload.data.id]: action.payload.data }

		case FETCH_POSTS:
			// TURN POSTS ARRAY INTO OBJECT CONTAINING POSTS WITH ID KEYS SET
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state;
	}
}