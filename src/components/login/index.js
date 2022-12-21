import React,{useRef,useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Link,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../context';
import Image from '../../Assets/login.jpg'
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
      <div className=' forms' >
        <div className="img-container">
        <img src={Image} alt="" />
        </div>

      <form >
        
  <div className="mb-4 inp">
    <label className="form-label" for="form1Example1">Email address</label>
    <input type="email" id="form1Example1" className="form-control " onChange={(e)=> setEmail(e.target.value)}/>
  </div>

  <div className="mb-4 inp">
    <label className="form-label" for="form1Example2">Password</label>
    <input type="password" id="form1Example2" className="form-control" onChange={(e)=> setPassword(e.target.value)}  />

    
  </div>

  <div className="login-footer">
    
      <Link to={'/signup'}>Dont have an account?</Link>
      

    <Button variant="primary" onClick={handleSubmit } >
          Sign in
        </Button>
          </div>
          
        
    </form>
    </div>
  );
}

export default Login


