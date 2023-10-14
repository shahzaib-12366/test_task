// store.js
import { createStore, combineReducers } from 'redux';
import blogViewsReducer from '../component/blogViews/blogViewsReducer';
import propertyReducer from './propertyReducer';
import blogViewsReducer from './blogViews/blogViewsSlice';

const rootReducer = combineReducers({
  // Add other reducers here if needed
  blogViews: blogViewsReducer,
  propertyReducer,
});

const store = createStore(rootReducer);

export default store;
