// IMPORT OBJECTS AND METHODS
import { combineReducers } from 'redux';
// IMPORT REDUCERS
import PostsReducer from './reducer_posts';

// CREATE ROOTREDUCER
const rootReducer = combineReducers({
  posts: PostsReducer
});

// EXPORT ROOTREDUCER
export default rootReducer;
