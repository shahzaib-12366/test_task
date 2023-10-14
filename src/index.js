// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogViewsReducer from './component/blogViews/blogViewsReducer'; 
import rootReducer from './component/tool/rootReducer';

const store = createStore(blogViewsReducer);
// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



