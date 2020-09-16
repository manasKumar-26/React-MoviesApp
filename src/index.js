import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './component/App';
import rootReducer from './reducer/index';
// logger=function(obj,next,action) so we use currying for our function
// const logger=({dispatch,getState})=>{
//   return (next)=>{
//     return (action)=>{
//       console.log('Action Name : ',action.type);
//       next(action);
//     }
//   }
// }
//make es6 logger func
const logger=({dispatch,getState})=>(next)=>(action)=>{
    if(typeof action !== 'function'){
      console.log('Action Name : ',action.type);
    }
    next(action);
}
// const thunk =({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const Store=createStore(rootReducer,applyMiddleware(logger,thunk));
ReactDOM.render(
  <React.StrictMode>
    <App Store={Store} />
  </React.StrictMode>,
  document.getElementById('root')
);

