// IMPORT OBJECTS AND METHODS
import { combineReducers } from 'redux';
// IMPORT REDUCERS
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

// CREATE ROOTREDUCER
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

// EXPORT ROOTREDUCER
export default rootReducer;
