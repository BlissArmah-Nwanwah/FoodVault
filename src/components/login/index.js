import React,{useRef,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../context';
import './login.css'



const Login = () => {

  const {signIn} = useGlobalContext()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
 
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')
    try {
      await signIn(email,password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)  
    }
  }
  return (
    <>
      <Row xs={1} md={2} className=' mt-5 form ' >
      <form >
      {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="email" id="form1Example1" className="form-control inp" onChange={(e)=> setEmail(e.target.value)}/>
    <label className="form-label" for="form1Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form1Example2" className="form-control inp" onChange={(e)=> setPassword(e.target.value)}  />
    <label className="form-label" for="form1Example2">Password</label>
  </div>

  <div className="mb-2 login-footer">
    
      <Link to={'/signup'}>Dont have an account?</Link>
      

    <Button variant="primary" onClick={handleSubmit } >
          Sign in
        </Button>
          </div>
          
        
    </form>
    </Row>
            </>
  );
}

export default Login


