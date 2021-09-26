import ReactDOM from 'react-dom';
import React from 'react';
import { GlobalStoreProvider } from 'GlobalStore';
import 'ResetSCSS';
import App from './AppComponent/App.js';

ReactDOM.render(
  <GlobalStoreProvider>
    <App />
  </GlobalStoreProvider>,

  document.getElementById('root'));