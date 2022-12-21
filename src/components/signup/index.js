import React,{ useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../firebase-config'
import { useGlobalContext } from '../../context';
import './signup.css'

const Index = () => {
  const {createUser} = useGlobalContext()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('') 
    try {
     await  createUser(email ,password)
     navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }

  }

 

  
  return (
   
    <Form className='form' >
      <Col sm={12} md={6} lg={4}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
          
        </Form.Group>
      </Col>

      <Col sm={12} md={6} lg={4}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
          {/* <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={password} /> */}
        </Form.Group>
       
      <h1 className="form-header">Already have an account? <Link to='/login'>SignIn  </Link></h1> 
        <Button variant="primary" onClick={handleSubmit} >
          Sign Up
        </Button>
      </Col>
  </Form>
    
          
  )
}

export default Index