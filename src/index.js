import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducer/rootReducer'
import reduxThunk from 'redux-thunk'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware=store=>next=>action=>{
  const result = next(action)
  console.log("middleware", store.getState())
  return result
}
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
  )))

const app = (
  <Provider store={store}>
    <App />
  </Provider> 
)
ReactDOM.render(app, document.getElementById('root')
);
serviceWorker.unregister();
