import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './LoginPage/LoginPage.css';
const HelperLogin = props => {
  
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => { 
    axios
      .post("https://dev-help-desk.herokuapp.com/api/helpers/login", data)
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
    <div className={`login-form ${props.sh === 'helper' && props.lr === 'login' ? '' : 'hidden'}`}>
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
    </div>
  );
};

export default HelperLogin
