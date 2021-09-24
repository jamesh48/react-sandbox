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

const todos = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD TODO':
      return state.concat(payload);
    default:
      return state;
  };
};

const editedTodoValue = (state = '', {type, payload}) => {
  switch (type) {
    case 'EDIT TODO VALUE':
        return payload;
    default:
      return state;
  };
};

export default combineReducers({ todos, editedTodoValue });