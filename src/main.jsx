import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import CartContext from './context/CartContext.jsx'
import { Provider } from 'react-redux'
import store from "./redux/store.js"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        {/* <CartContext> */}
          <App />
        {/* </CartContext> */}
      </React.StrictMode>
      </Router>
  </Provider>
)
