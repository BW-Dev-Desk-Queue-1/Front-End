import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => { 
    axios
      .post("https://dev-help-desk.herokuapp.com/api/login", data)
      .then(res => {
        console.log('login response: ', res.data)      
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.userId)
        localStorage.setItem('accessType', res.data.accessType)
        history.push('/dashboard')
      })
      .catch(err => {
        console.log(`login error`, err)      
      })
  }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Student Login</h2>
      <input
        name="username"
        ref={register({required: 'true'})}
      />
      {errors.username && <span>Username is required</span> }

      <input
        name="password"
        ref={register({required: 'true'})}
      />
      {errors.password && <span>Password required</span> }

      <button type="submit">Login</button>
    </form>
  );
};

export default Login
