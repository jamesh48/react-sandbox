// import {  } from './Actions.js';

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
};

const count = (state = 0, { type, payload }) => {
  switch (type) {
    case 'INCREMENT COUNTER':
      return state + 1;
    case 'DECREMENT COUNTER':
      return state - 1;
    default:
      return state;
  };
};

export default combineReducers({ count });