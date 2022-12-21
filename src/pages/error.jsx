import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
  return (
      <div >
          <h3 style={{ textAlign: 'center' }}>oops! it seems you are on the wrong page</h3>
          <Link to='/' style={{ marginLeft: '180px', backgroundColor:'green',color:'white' }}className='btn'>back to home</Link> 
      </div>
  )
}

export default error