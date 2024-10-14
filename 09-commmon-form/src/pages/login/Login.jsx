import React, { useState } from "react";
import CommonForm from "../../components/common-from/CommonForm";
import { loginFormElements } from "../../config";

const initialFormData = {
  email: "",
  password: "",
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

 

  function onHandleSubmit(event) {
    event.preventDefault();

    console.log(loginFormData, "loginFormData");

    //api logic & database logic

    setLoginFormData(initialFormData)
  }
  

  return (
    <div>
      <h1>Login Page</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={'Login'}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default Login;
