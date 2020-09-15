import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './component/App';
import movies from './reducer/index'

const Store=createStore(movies);
ReactDOM.render(
  <React.StrictMode>
    <App Store={Store} />
  </React.StrictMode>,
  document.getElementById('root')
);

