import React, {useState} from "react";
import {useForm} from 'react-hook-form';

import './CreateTicket.css';

const CreateTicket = props => {
    const {register, handleSubmit, watch, errors } = useForm();
        

    const onSubmit = data => 
    { 
      console.log(data,"is the data")
    }
    
    
return (
  <div className='modal'>
    <div className='ticket'>
      <span className='close' onClick={props.closeTicket}>&times;</span>
      <h2>Let's submit a help ticket</h2>
      <p><span className='red'>*</span> Required Fields</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label><span className='red'>*</span> What's going on?</label>
        <input
          name="title"
          defaultValue=""
          ref={register({ required: true, maxLength: 20 })}
        />
        {errors.title && <p className="error">Title is required</p>}
        <br />
        <label><span className='red'>*</span> What is this issue about?</label>
        <select name="category" ref={register({ required: true })}>
          <option value='Equipment'>Equipment</option>
          <option value='People'>People</option>
          <option value='Track'>Track</option>
          <option value='Finances'>Finances</option>
          <option value='Other'>Other</option>
        </select>
        {errors.category && <p className="error">Description is required</p>}
        <br />
        <label>Description</label>
        <textarea name="description" rows='5' cols='50' ref={register({ required: true })} />
        {errors.description && <p className="error">Description is required</p>}
        <br />
        <label>What have you Tried?</label>
        <textarea name="tried" ref={register({ required: true })} />
        {errors.tried && <p className="error">Tell us What you have Tried</p>}
        <br />
        <input type="submit" />
      </form>
    </div>
  </div>
);
}
export default CreateTicket;