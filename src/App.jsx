import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ShoppingPage from './components/ShoppingPage.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ShoppingCart from './components/ShoppingCart.jsx'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShoppingPage />} />
        <Route path ='/cart' element={<ShoppingCart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
