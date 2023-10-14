import { combineReducers } from 'redux';
import propertyReducer from './propertyReducer';

const rootReducer = combineReducers({
  propertyReducer,
  // Add other reducers if needed
});

export default rootReducer;
