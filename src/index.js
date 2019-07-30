import React from 'react'
import { render } from 'react-dom'
import App from './js/containers/App'

const renderApp = () => render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./js/containers/App', renderApp)
}

renderApp()
