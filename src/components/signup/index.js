import React,{useEffect, useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../home'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Index = () => {

  
  return (
   
    <Form>
    <Row style={{ justifyContent: 'center' }}>
      <h2 style={{ textAlign: 'center'}}>Sign Up</h2>
      <Col sm={12} md={6} lg={4}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="name" placeholder="Bliss Amorkor"   />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="tel" placeholder="0245856985"  />
          
        </Form.Group>            
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  />
          
        </Form.Group>
      </Col>
    </Row>

    <Row style={{ justifyContent: 'center' }}>
      <Col sm={12} md={6} lg={4}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          {/* <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={password} /> */}
        </Form.Group>
       
        <Button variant="primary" type="submit" >
          Sign Up
        </Button>
      </Col>
    </Row>
  </Form>
    
          
  )
}

export default Index