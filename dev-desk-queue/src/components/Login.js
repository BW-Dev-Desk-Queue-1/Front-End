import React, {useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = props => {
  
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => { 
    axios.post("https://dev-help-desk.herokuapp.com/api/login", data)
    .then(res => {console.log('login token: ',res.data)
      
   localStorage.setItem('token', JSON.stringify(res.data.token))
   localStorage.setItem('userId', JSON.stringify(res.data.userId))
    history.push('/dashboard')
  })
    .catch(err => console.log(err));
    

  }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
