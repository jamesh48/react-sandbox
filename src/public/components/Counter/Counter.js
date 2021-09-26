import React from 'react'
import 'GlobalSCSS';

import { useCounterContext } from 'CounterStore';

export default () => {
  const [{ count }, counterDispatch] = useCounterContext();

  return (
    <div className='component-container' id='counter-root'>
      <div>Count: {count}</div>
      <span style={{ display: 'flex' }}>
        <button onClick={() => counterDispatch({ type: 'INCREMENT COUNTER' })}>+</button>
        <button onClick={() => counterDispatch({ type: 'DECREMENT COUNTER' })}>-</button>
      </span>
    </div>
  );
};