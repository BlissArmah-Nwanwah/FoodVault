import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import LoginPage from '../pages/login'
import ProductsPage from '../pages/products'
import SignupPage from '../pages/signup'
import Error from '../pages/error'
import ProtectiveRoute from '../ProtectiveRoute'
import Add from  '../pages/add'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ProtectiveRoute> <HomePage /></ProtectiveRoute>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/products/:id' element={<ProductsPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/add' element={<Add/>} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default AppRoutes