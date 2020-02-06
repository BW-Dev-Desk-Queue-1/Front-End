import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


import axios from 'axios';

const HelperRegister = () => {
  const [user, setUser] = useState({});
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  
  const onSubmit = data => { 
    axios.post("https://dev-help-desk.herokuapp.com/api/helpers/register", data)
    .then(res => {console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userId', res.data.id)
      localStorage.setItem('accessType', res.data.accessType)
      history.push('/dashboard')
    })
    .catch(err => console.log(err));
  }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>helper</h2>
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
  );
};

export default HelperRegister;