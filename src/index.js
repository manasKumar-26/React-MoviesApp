import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
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
// export const storeContext=createContext();
// console.log(storeContext)
// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return(
//       <storeContext.Provider value={store}>
//         {this.props.children}
//       </storeContext.Provider>
//     );
//   }
// }
//connect(cb)(app)
// export function Connect(callback){
//   return function (Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//           super();
//           this.unsubscribe=props.store.subscribe(()=>{
//           this.forceUpdate();
//         })
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const state=this.props.store.getState();
//         const DataFromState=callback(state);
//         return(
//           <Component {...DataFromState} dispatch={this.props.store.dispatch}/>
//         );
//       }

//     }
//     return class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return(
//           <storeContext.Consumer>
//               {(store)=><ConnectedComponent store={store}/>}
//           </storeContext.Consumer>
//         );
//       }
//     };  
//   }
// }
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

