import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers({ ...reducers });

export default createStore(reducer, applyMiddleware(thunk))
