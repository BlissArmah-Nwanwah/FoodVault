import React,{useEffect, useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../home'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Index = () => {
  const name = useRef()
  const contact = useRef()
  const email = useRef()
  const password = useRef()
  const [showHome,setShowHome] = useState(false)

  const localSignUp = localStorage.getItem('signup') 

useEffect(()=>{
  if(localSignUp){
    setShowHome(true)
  }
})
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if (name.current.value&&contact.current.value&&email.current.value&&password.current.value){
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("contact",contact.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signup",email.current.value)
      alert("Account created Successfully!!")
      window.location.reload()
    }
  }
  return (
    <>
    {
      showHome?<Home/>:
    <Form>
    <Row style={{ justifyContent: 'center' }}>
      <h2 style={{ textAlign: 'center'}}>Sign Up</h2>
      <Col sm={12} md={6} lg={4}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="name" placeholder="Bliss Amorkor"  ref={name} />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="tel" placeholder="0245856985" ref={contact} />
          
        </Form.Group>            
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email} />
          
        </Form.Group>
      </Col>
    </Row>

    <Row style={{ justifyContent: 'center' }}>
      <Col sm={12} md={6} lg={4}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={password}/>
          {/* <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={password} /> */}
        </Form.Group>
       
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Col>
    </Row>
  </Form>
    }
          </>
  )
}

export default Index