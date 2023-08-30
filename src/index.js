import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './main.scss'

function component(text) {
  const element = document.createElement('h1')
  element.textContent = text
  return element
}

document.body.prepend(component('Проект собран на Webpack'))

ReactDOM.render(<App />, document.getElementById('root'))
