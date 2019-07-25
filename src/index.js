import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './js/containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./js/containers/App', renderApp)
}

renderApp()
