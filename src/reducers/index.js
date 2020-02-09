import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { userFormReducer } from './userFormReducer';
export const rootReducer = combineReducers({
  user: userReducer,
  userFormReducer
});
