// IMPORT PACKAGES
import _ from 'lodash';
// IMPORT TYPE VARIABLES
import { FETCH_POSTS } from '../actions';

// CREATE POSTSREDUCER
export default function(state = {}, action) {
	switch (action.type) {

		case FETCH_POSTS:
			// TURN POSTS ARRAY INTO OBJECT CONTAINING POSTS WITH ID KEYS SET
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state;
	}
}