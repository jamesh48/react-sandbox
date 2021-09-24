import React from 'react';
import Counter from './Counter/Counter.js';
import Todos from './Todos/Todos.js';
import 'MainSCSS';
import { TodosStoreProvider } from 'TodosStore';
import { CounterStoreProvider } from 'CounterStore';

export default () => {

  return (
    <main>
      <TodosStoreProvider>
        <Todos />
      </TodosStoreProvider>

      <CounterStoreProvider>
        <Counter />
      </CounterStoreProvider>
    </main>
  )
}