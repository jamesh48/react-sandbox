import React from 'react';
import CombinedReducers from './todosReducers.js';
const TodosStoreContext = React.createContext();
const initialState = {
  todos: [],
  editedTodoValue: ''
};
const TodosStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers,
    initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <TodosStoreContext.Provider value={store}>{children}</TodosStoreContext.Provider>
  );
};

const useTodosContext = () => {
  const context = React.useContext(TodosStoreContext);
  if (context === undefined) {
    throw new Error('useTodosContext must be used within a TodosProvider')
  }
  return context;
};
export { useTodosContext, TodosStoreProvider };