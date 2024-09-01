import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Productdetail from './pages/Productdetail'
import Loginpage from './pages/Loginpage'
import Signup from './pages/Signup'

function App() {
 
 

  return (
    <>
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Product-Detail/:id' element={<Productdetail />} />
          <Route path='/Login' element={<Loginpage />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
