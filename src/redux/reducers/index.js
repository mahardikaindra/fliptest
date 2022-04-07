import { combineReducers } from 'redux';
import * as HomeReducer from '../collections/Home/reducer';

const appReducers = combineReducers(
  Object.assign(HomeReducer)
);

export default appReducers;
