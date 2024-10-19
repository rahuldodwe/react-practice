import React from 'react'
import { Link } from 'react-router-dom'

const Default = () => {
  return (
    <div className='text-center p-4 my-1'>
      <h1 className='my-3'>Page Not Found </h1>
      <Link className='p-2 bg-orange-400 rounded-lg' to={'/home'} >Go to Home</Link>

    </div>
  )
}

export default Default
