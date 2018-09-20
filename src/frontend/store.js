/** store **/

import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';

export const store = createStore(combineReducers({ }), applyMiddleware(thunkMiddleware));

export default store;
