import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css'
import Loading from "../Loading/Loading"
import axios from "axios"
import { useGlobalContext } from '../../context';



const Index = () => {
  const [data, setData] = useState([])
  const { loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
   
  return (
    <>
      <h1 className='text'>product</h1>
    <Row xs={1} sm={2} md={3}  className="g-4">

        
    {Array.from({ length: 7 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      ))}
      </Row>
    </>
  )
}

export default Index