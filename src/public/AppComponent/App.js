import React from 'react';
import Counter from 'Components/Counter/Counter.js';
import Todos from 'Components/Todos/Todos.js';
import './app.scss'
import { TodosStoreProvider } from 'TodosStore';
import { CounterStoreProvider } from 'CounterStore';

export default () => {

  return (
    <div id='app-root'>

      <select id='app-select'>
        <option value='test'></option>
      </select>


      <main>
        <TodosStoreProvider>
          <Todos />
        </TodosStoreProvider>

        <CounterStoreProvider>
          <Counter />
        </CounterStoreProvider>
      </main>
    </div>
  )
}