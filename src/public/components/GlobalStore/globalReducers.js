// import {  } from './globalActions.js';

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
};

export default combineReducers({});