import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import './LoginPage/LoginPage.css';

const HelperRegister = props => {
  // const [user, setUser] = useState({});
  let history = useHistory();
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => { 
    axios.post("https://dev-help-desk.herokuapp.com/api/helpers/register", data)
    .then(res => {
      console.log(res.data)
      localStorage.setItem({
        'token': res.data.token,
        'userId': res.data.id,
        'accessType': res.data.accessType
      })
      history.push('/dashboard')
    })
    .catch(err => console.log(err));
  }
  console.log("PROPS:", props)
  return (
    <div className={`login-form ${props.lr === 'register' && props.sh === 'helper' ? '' : 'hidden'}`}>
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
          ref={register({required: 'true'})}
          className={`${formState.touched.password && errors.password ? 'input-error' : ''} ${formState.touched.password && !errors.password ? 'input-valid' : ''}`}
          placeholder='password'
        />
        {errors.password && <span className='error'>Password required</span> }
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default HelperRegister;