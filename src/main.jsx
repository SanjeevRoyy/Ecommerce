import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
  <Navbar/>
    <App />
    <Footer/>
    </CartProvider>
  </React.StrictMode>
  </BrowserRouter>,
)
