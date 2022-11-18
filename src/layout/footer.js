import React from 'react'
import './footer.css'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import {AiFillEye} from 'react-icons/ai'
import {FaHandshake} from 'react-icons/fa'
import {FiHelpCircle} from 'react-icons/fi'

const footer = () => {
    return (
        <>
        <hr/>
            <Row xs={1} sm={2} md={3} mt={5} className="center">
                <Col  xs={{ span: 6, offset: 3 }}>  
                    <span>FOOD.</span>
                    <span>VAULT</span>
                </Col>
                <Row xs={1} md={3}>
                <Col  xs={{ span: 6, offset: 5 }}>

                    <a href="" > <AiFillEye/> about</a>
                </Col>
                <Col  xs={{ span: 6, offset: 5 }}>
                    <a href=""> <FaHandshake/> contact</a>
                </Col>
                <Col  xs={{ span: 6, offset: 5 }}>
                    <a href=""> <FiHelpCircle/> help</a>
                </Col>
                </Row>
                <Col  xs={{ span: 6, offset: 4 }}>medium</Col>
            </Row>
            <hr className='hr' />
                <div className='copyright'>
                    <p>
                        Copyright © 2022 • Team Drive
                    </p>
                </div>
        </>
    )
}

export default footer