import React,{useState,useEffect} from 'react'

import './style.css'
import Loading from "../Loading/Loading"
import Product from "../products"
import axios from "axios"
import { useGlobalContext } from '../../context';
import Row from 'react-bootstrap/Row';




const Index = () => {
  const { loading,data } = useGlobalContext()
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

export default Index