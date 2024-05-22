import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
// import Contact from './pages/contact/Contact'
// import Portfolio from './pages/portfolio/Portfolio
import Login from './pages/login/Login'
import Categories from './pages/categories/Categories'
import Cart from './pages/cart/Cart'
import Protected from './pages/login/Protected'
import Payment from './pages/contact/Payment'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Protected Component={Home}/>}/>
        <Route path='/categories' element={<Protected Component={Categories}/>}/>
        <Route path='/blog' element={<Protected Component={Payment}/>}/>
        <Route path='/cart' element={<Protected Component={Cart}/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Router