import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import dogReducer from './dogReducer';

const rootReducer = combineReducers({ counterReducer, dogReducer });

export default rootReducer;
