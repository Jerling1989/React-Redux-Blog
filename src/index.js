// IMPORT OBJECTS AND METHODS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
// IMPORT COMPONENTS AND REDUCERS
import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// RENDER REACT COMPONENTS IN THE DOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Route path="/" component={PostsIndex} />
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
