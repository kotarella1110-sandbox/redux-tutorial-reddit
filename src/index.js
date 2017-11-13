import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import App from './containers/App'

const middleware = [ thunkMiddleware ] // lets us dispatch() functions
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger()) // neat middleware that logs actions
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)