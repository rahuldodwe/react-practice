import React from 'react'
import LoginComponent from './pages/login/Login'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px'}}>
      <Login/>
      <Register/>
    </div>
  )
}

export default App
