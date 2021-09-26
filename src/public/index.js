import ReactDOM from 'react-dom';
import React from 'react';
import { GlobalStoreProvider } from 'GlobalStore';
import 'ResetSCSS';
import ReactSandboxApp from './AppComponent/ReactSandboxApp.js';
import { TodosStoreProvider } from 'TodosStore';
import Todos from 'Components/Todos/Todos.js';
import { CounterStoreProvider } from 'CounterStore';
import Counter from 'Components/Counter/Counter.js';

// import TSHelloWorld from 'Components/tsComponent/TSHelloWorld.tsx';

ReactDOM.hydrate(
  <GlobalStoreProvider>
    <ReactSandboxApp>
      <TodosStoreProvider key='Todos' label='Todos'>
        <Todos />
      </TodosStoreProvider>
      <CounterStoreProvider key='Counter' label='Counter'>
        <Counter />
      </CounterStoreProvider>
      {/* <TSHelloWorld key='TS Hello World' label='TS Hello World'/> */}
    </ReactSandboxApp>
  </GlobalStoreProvider>,

  document.getElementById('react-sandbox-root')
  );