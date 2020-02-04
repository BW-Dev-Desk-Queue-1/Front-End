import React, {useState} from "react";
import {useForm} from 'react-hook-form';


const CreateTicket = props => {
    const {register, handleSubmit, watch, errors } = useForm();
        

    const onSubmit = data => 
    { 
      console.log(data,"is the data")
    }
    
    
return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>Title</label>
    <input
      name="title"
      defaultValue=""
      ref={register({ required: true, maxLength: 20 })}
    />
    {errors.title && <p className="error">Title is required</p>}
    <br />
    <label>Description</label>
    <input name="description" ref={register({ required: true })} />
    {errors.description && <p className="error">Description is required</p>}
    <br />
    <label>Category</label>
    <input name="category" ref={register({ required: true })} />
    {errors.category && <p className="error">Description is required</p>}
    <br />
    <label>What have you Tried?</label>
    <input name="tried" ref={register({ required: true })} />
    {errors.tried && <p className="error">Tell us What you have Tried</p>}
    <br />
    <input type="submit" />
  </form>
);
}
export default CreateTicket;