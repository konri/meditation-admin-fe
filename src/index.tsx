import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './store/rootReducer'

import App from './view/pages/MainPage/App'
import * as serviceWorker from './serviceWorker'
import setupAxiosInterceptors from './shared/settings/interceptor'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))
setupAxiosInterceptors(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
