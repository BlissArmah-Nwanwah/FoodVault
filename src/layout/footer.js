import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const footer = () => {
    return (
        <>
            <Row xs={1} sm={2} md={3}>
                <Col>  <h1 className="footer-logo">
                    <span>FOOD.</span>
                    <span>VAULT</span>
                </h1></Col>
                <Col>
                <div>
                    <a href="">about</a>
                    <a href="">contact</a>
                    <a href="">help</a>
                </div>
                </Col>
                <Col>medium</Col>
            </Row>
        </>
    )
}

export default footer