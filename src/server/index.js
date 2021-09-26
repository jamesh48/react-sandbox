import React from 'react';
import express from 'express';
import path from 'path';
import ReactSandboxApp from '../public/AppComponent/ReactSandboxApp.js'
import { TodosStoreProvider } from 'TodosStore';
import Todos from 'Components/Todos/Todos.js';
import { CounterStoreProvider } from 'CounterStore';
import Counter from 'Components/Counter/Counter.js';
// import TSHelloWorld from 'Components/tsComponent/TSHelloWorld.tsx';
import { GlobalStoreProvider } from 'GlobalStore';
import { htmlStart, htmlEnd } from './template.js';
import { renderToNodeStream } from 'react-dom/server';
const sandboxApp = express();


sandboxApp.use('/static', express.static(path.resolve('./dist/public')));

sandboxApp.use('*', (req, res, next) => {
  console.log(req.originalUrl, req.method);
  next();
})

sandboxApp.get('/', (req, res) => {

  const reactSandboxAppStream = renderToNodeStream(
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
    </GlobalStoreProvider>
  );

  res.write(htmlStart());

  reactSandboxAppStream.pipe(res, { end: false });

  reactSandboxAppStream.on('end', () => {
    res.write(htmlEnd());
    res.end();
  });

});

const port = 4300;
sandboxApp.listen(port, () => {
  console.log('React sandbox listening on port ' + port)
})