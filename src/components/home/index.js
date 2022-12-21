import React,{useState} from 'react'

import './style.css'
import Loading from "../Loading/Loading"
import Product from "../products"
import { useGlobalContext } from '../../context';
import Row from 'react-bootstrap/Row';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { loading,data,user,logout } = useGlobalContext()
  const navigate = useNavigate()

  const handleLogout = async () =>{
      try {
        await logout()
        navigate('/')
        console.log('you are logged out')
      } catch (e) {
        console.log(e.message)
        
      }
  }

  if (loading) {
    return <Loading/>
  }
  if (data.length < 1) {
    return (
      <div>
        <h2>Sorry No data to be shown, kindly refresh the page </h2>
      </div>
     )
   }

  
   
  return (
    <>
      <h1 className='text'>product</h1>
     <p>Hello: {user?.email}</p> 
      <button onClick={handleLogout} >signout</button>
      
      <Row xs={1} sm={2} md={3} className="g-4" >
      {
        data.map((item) => {
           return <Product key={item.id} {...item} />
        })
      }
    </Row>
    </>
  )
}

export default Home