import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


import axios from 'axios';

import './LoginPage/LoginPage.css';

const Register = props => {
  const [user, setUser] = useState({});
  let history = useHistory();
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => { 
    axios.post("https://dev-help-desk.herokuapp.com/api/register", data)
    .then(res => {console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userId', res.data.id)
      localStorage.setItem('accessType', res.data.accessType)
      history.push('/dashboard')
    })
    .catch(err => console.log(err));
  }
 
  return (
    <div className={`login-form ${props.lr === 'register' && props.sh === 'student' ?  '' : 'hidden'}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
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

        <button type="submit" className={`${!errors.password && !errors.username && formState.isValid ? 'student white-text' : ''}`}>Register</button>
      </form>
    </div>
  );
};

export default Register;