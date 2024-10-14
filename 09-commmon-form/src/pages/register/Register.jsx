import React, { useState } from 'react'
import CommonForm from '../../components/common-from/CommonForm'
import { registerFormElements } from '../../config'

const initialRegisterFormData = {
  name : '',
  email : '',
  password : '',
}

const Register = () => {

  const [registerFormData, setRegisterFormData] = useState(initialRegisterFormData);

  function handleRegisterOnSubmit(event) {
    event.preventDefault();

    console.log(registerFormData);

    setRegisterFormData(initialRegisterFormData)
    
  }


  return (
    <div>
      <h1>Register Page</h1>
      <CommonForm
      formControls={registerFormElements}
      formData={registerFormData}
      setFormData={setRegisterFormData}
      buttonText={"Register"}
      onHandleSubmit={handleRegisterOnSubmit}
      />

    </div>
  )
}

export default Register
