import React,{useEffect, useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../home'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../firebase-config'

const Index = () => {

  const [registerEmail,setRegisterEmail] = useState('')
  const [registerPassword,setRegisterPassword] = useState('')


  const register = async () =>{
    try {
     
      const user = createUserWithEmailAndPassword(auth,registerEmail,registerPassword )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }

  }

 

  
  return (
   
    <Form>
    <Row style={{ justifyContent: 'center' }}>
      <h2 style={{ textAlign: 'center'}}>Sign Up</h2>
      <Col sm={12} md={6} lg={4}>
        {/* <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="name" placeholder="Bliss Amorkor"   />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="tel" placeholder="0245856985"  />
          
        </Form.Group>             */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{setRegisterEmail(event.target.value)}} />
          
        </Form.Group>
      </Col>
    </Row>

    <Row style={{ justifyContent: 'center' }}>
      <Col sm={12} md={6} lg={4}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event)=>{setRegisterPassword(event.target.value)}} />
          {/* <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={password} /> */}
        </Form.Group>
       
        <Button variant="primary"  onClick={register} >
          Sign Up
        </Button>
      </Col>
    </Row>
  </Form>
    
          
  )
}

export default Index