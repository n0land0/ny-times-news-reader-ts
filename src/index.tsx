import React from 'react';
import { render } from 'react-dom';

import ContextProvider from './context/ContextProvider';
import App from './components/App';
import './styles/index.scss';

const root: HTMLElement | null = document.getElementById('root');

render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  root
);
