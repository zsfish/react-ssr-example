import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './index';

const reducer = combineReducers({
  index: indexReducer
});



export const getStore =  () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  return store
}
export const getClientStore =  () => {
  let defaultState = window._context ? window._context : {};
  const store = createStore(reducer, defaultState, applyMiddleware(thunk))
  return store
}