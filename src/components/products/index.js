import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const index = ({id,name,image,info,glass}) => {
  return (
    <div>
      
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
            <Card.Text>
             {info}
            </Card.Text>
            <Link to={`products/${id}`}>Details</Link>
          </Card.Body>
        </Card>
      </Col>
      
    </div>
  )
}

export default index