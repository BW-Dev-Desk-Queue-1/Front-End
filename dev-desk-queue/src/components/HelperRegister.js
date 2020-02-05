import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


import axios from 'axios';

import './LoginPage/LoginPage.css';

const HelperRegister = props => {
  const [user, setUser] = useState({});
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => { 
    axios.post("https://dev-help-desk.herokuapp.com/api/helpers/register", data)
    .then(res => {console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userId', res.data.userId)
      localStorage.setItem('accessType', res.data.accessType)
      history.push('/dashboard')
    })
    .catch(err => console.log(err));
  }
 
  return (
    <div className={`login-form ${props.lr === 'register' && props.sh === 'helper' ? '' : 'hidden'}`}>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default HelperRegister;