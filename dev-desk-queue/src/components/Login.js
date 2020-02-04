import React, { useState } from 'react';
import axios from "axios";

const Login = props => {

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChanges = e => {
    setLoginForm({
      ...loginForm,      
      [e.target.name]: e.target.value
      })         
  };

  const handleLogin = e => {
    e.preventDefault();
    axios
      .post("https://dev-help-desk.herokuapp.com/api/login", loginForm)
      .then(res => {
        console.log(`this is from login`, res)
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        props.history.push("/dashboard")
      })
      .catch(err => {
        console.log(`this is failed login`, err)
      })
  }

  return (
    <div>
    <form onSubmit={handleLogin}>
        <input
          type="string"
          name="username"
          value={loginForm.username}
          onChange={handleChanges}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleChanges}
          placeholder="password"

        />
        <button onSubmit={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login
