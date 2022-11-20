import React,{useState} from 'react'
import './footer.css'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { AiFillEye } from 'react-icons/ai'
import { FaHandshake } from 'react-icons/fa'
import { FiHelpCircle } from 'react-icons/fi'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    
    return (
        <div className='footer'>
            <hr />
            <Row xs={3}  className="center  " >
                <Col >
                    <div className="footer-main">

                        <span className='first'>FOOD.</span>
                        <span>VAULT</span>
                    </div>
                </Col>
                <Row xs={3} >
                    <Col >
                        <a href="" > <AiFillEye className='icon'  /> about</a>
                    </Col>
                    <Col >
                        <a href=""> <FaHandshake className='icon'  /> contact</a>
                    </Col>
                    <Col  >
                        <a href=""> <FiHelpCircle className='icon'  /> help</a>
                    </Col>
                </Row>
                <Col >
                    <div className='soc'>
                        <a href="" className='social' >
                            <i><AiFillFacebook className='icon' /></i>
                        </a>
                        <a href="" className='social'>
                            <i><AiOutlineInstagram className='icon' /></i>
                        </a>
                        <a href="" className='social'>
                            <i><AiFillTwitterCircle className='icon' /></i>
                        </a>
                    </div>
                </Col>
            </Row>
            <hr className='hr' />
            <div className='copyright'>
                <p>
                    Copyright © 2022 • Team Drive
                </p>
            </div>

            
        </div>
    )
}

export default Footer