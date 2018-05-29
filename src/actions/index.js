// IMPORT AXIOS
import axios from 'axios';

// EXPORT TYPE VARIABLE
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
// CREATE API URL AND KEY VARIABLSE
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jacob1221';

// CREATE FETCHPOSTS (ALL) ACTION CREATOR
export function fetchPosts() {
	// USE AXIOS FOR AJAX GET REQUEST
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	// RETURN ACTION OBJECT WITH TYPE AND REQUEST PROMISE AS PAYLOAD
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// CREATEPOST ACTION CREATOR
export function createPost(values, callback) {
	// USE AXIOS FOR AJAX POST REQUEST
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
	// TRIGGER CALLBACK FUNCTION TO GO TO ROOT AFTER POST COMPLETES
	.then(() => callback());
	// RETURN ACTION OBJECT WITH TYPE AND REQUEST PROMISE AS PAYLOAD
	return {
		type: CREATE_POST,
		payload: request
	};
}

// CREATE FETCHPOST (SPECIFIC) ACTION CREATOR
export function fetchPost(id) {
	// USE AXIOS FOR AJAX GET REQUEST
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	// RETURN ACTION OBJECT WITH TYPE AND REQUEST PROMISE AS PAYLOAD
	return {
		type: FETCH_POST,
		payload: request
	};
}












