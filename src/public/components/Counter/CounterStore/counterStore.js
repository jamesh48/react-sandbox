import React from 'react';
import CombinedReducers from './counterReducers.js';
const CounterStoreContext = React.createContext();
const initialState = { count: 0 };
const CounterStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers,
    initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <CounterStoreContext.Provider value={store}>{children}</CounterStoreContext.Provider>
  );
};
const useCounterContext = () => {
  const context = React.useContext(CounterStoreContext);
  if (context === undefined) {
    throw new Error('useCounterContext must be used within a CounterProvider')
  }
  return context;
};
export { useCounterContext, CounterStoreProvider };