import React from 'react'
import globalStyles from 'GlobalSCSS';
const { componentContainer } = globalStyles;

import { useCounterContext } from 'CounterStore';

export default () => {
  const [{ count }, counterDispatch] = useCounterContext();

  return (
    <div className={componentContainer}>
      <div>Count: {count}</div>
      <span style={{ display: 'flex' }}>
        <button onClick={() => counterDispatch({ type: 'INCREMENT COUNTER' })}>+</button>
        <button onClick={() => counterDispatch({ type: 'DECREMENT COUNTER' })}>-</button>
      </span>
    </div>
  );
};