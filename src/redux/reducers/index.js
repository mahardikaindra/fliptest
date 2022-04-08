import { combineReducers } from 'redux';
import * as ComponentsReducer from '../collections/Components/reducer';
import * as HomeReducer from '../collections/Home/reducer';

const appReducers = combineReducers(
  Object.assign(ComponentsReducer, HomeReducer)
);

export default appReducers;
