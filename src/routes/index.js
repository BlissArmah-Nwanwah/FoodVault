import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import LoginPage from '../pages/login'
import ProductsPage from '../pages/products'
import SignupPage from '../pages/signup'
import Error from '../pages/error'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/about' element={<ProductsPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default AppRoutes