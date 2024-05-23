import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createStore} from 'react-redux'
import { Provider } from 'react-redux'
import rootReducer from './services/reducer/Index.jsx'

const store =createStore(rootReducer)
console.log("store data", store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider >
)
