import React from 'react'
import Navbars from './navbar'
import Footer from './footer'
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      <Container className='content'>
        {children}
      <Footer/>
      </Container>
    </>
  )


}

export default Layout