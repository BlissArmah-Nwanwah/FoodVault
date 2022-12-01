import React,{useRef,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../../context';
import './styles.css'



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
    {/* <Form>
      <Row style={{ justifyContent: 'center' }}>
        <h2 style={{ textAlign: 'center'}}>Login</h2>
        <Col sm={12} md={6} lg={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
          </Form.Group>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Col sm={12} md={6} lg={4}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to={'/signup'}>Dont have an account? SignUp</Link>
          <Button variant="primary" type="submit" className='bot'>
            Submit
          </Button>
        </Col>
      </Row>
    </Form> */}
      <Row xs={1} md={2} className='justify-content-center mt-5 ' >
      <form>
      {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="email" id="form1Example1" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
    <label className="form-label" for="form1Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form1Example2" className="form-control" onChange={(e)=> setPassword(e.target.value)}  />
    <label className="form-label" for="form1Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div className="form-check">
      <Link to={'/signup'}>Dont have an account? SignUp</Link>
      </div>
    </div>

    <div className="col">
    {/* <!-- Simple link --> */}
    <a href="#!">Forgot password?</a>
    </div>
          </div>
          
    
    {/* <!-- Submit button --> */}
    {/* <button className="btn btn-primary btn-block" onClick={login} >Sign in</button> */}
    <Button variant="primary" onClick={handleSubmit } >
          Sign in
        </Button>
    </form>
    </Row>
            </>
  );
}

export default Login


