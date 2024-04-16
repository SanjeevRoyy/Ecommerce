import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
// import Portfolio from './pages/portfolio/Portfolio
import Login from './pages/login/Login'
import Categories from './pages/categories/Categories'
import Cart from './pages/cart/Cart'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Categories/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Router