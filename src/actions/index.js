// IMPORT AXIOS
import axios from 'axios';

// EXPORT TYPE VARIABLE
export const FETCH_POSTS = 'fetch_posts';
// CREATE API URL AND KEY VARIABLSE
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jacob1221';

// CREATE ACTION FUNCTION
export function fetchPosts() {
	// USE AXIOS FOR AJAX REQUEST
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	// RETURN ACTION OBJECT WITH TYPE AND REQUEST PROMISE AS PAYLOAD
	return {
		type: FETCH_POSTS,
		payload: request
	};
}