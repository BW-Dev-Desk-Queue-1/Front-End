import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

import './LoginPage/LoginPage.css';
const Login = props => {
  
  let history = useHistory();
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onBlur"
  });
  const [error, setError] = useState()

  const handleChange = () => {
    console.log(JSON.stringify(formState))
  }
  
  
  const onSubmit = data => { 
    axios
      .post("https://dev-help-desk.herokuapp.com/api/login", data)
      .then(res => {
        console.log('login response: ', res.data)      
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.userId)
        localStorage.setItem('accessType', res.data.accessType)
        setError(null)
        history.push('/dashboard')
      })
      .catch(err => {
        console.log(`login error`, err)   
        setError('Invalid username or password.')
           
      })
  }
  console.log(error)
 
  return (
    <div className={`login-form ${props.lr === 'login' && props.sh === 'student' ? '' : 'hidden'}`}>
    {error && <span className='error'>{error}</span>} 
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
          onChange={handleChange}
          ref={register({required: 'true'})}
          className={`${formState.touched.username && errors.username ? 'input-error' : ''} ${formState.touched.username && !errors.username ? 'input-valid' : ''}`}
          placeholder='username'
        />
        {errors.username && <span className='error'>Username is required</span> }

        <input
          name="password"
          type="password"
          ref={register({required: 'true'})}
          className={`${formState.touched.password && errors.password ? 'input-error' : ''} ${formState.touched.password && !errors.password ? 'input-valid' : ''}`}
          placeholder='password'
        />
        {errors.password && <span className='error'>Password required</span> }

        <button type="submit" className={`${!errors.password && !errors.username &&formState.isValid ? 'student white-text' : ''}`}>Login</button>
      </form>
    </div>
  );
};

export default Login
