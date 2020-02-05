import React from "react";
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import { postTicket } from "../../actions/ticketActions"


const CreateTicket = props => {
    const {register, handleSubmit, watch, errors } = useForm(); 
    let history = useHistory();

    const onSubmit = data => {
      const userId = localStorage.getItem('userId');
      props.postTicket(data, userId);
      history.push('/dashboard')
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
    <input name="ticketCategory" ref={register({ required: true })} />
    {errors.ticketCategory && <p className="error">Description is required</p>}
    <br />
    <label>What have you Tried?</label>
    <input name="tried" ref={register({ required: true })} />
    {errors.tried && <p className="error">Tell us What you have Tried</p>}
    <br />
    <label>Title</label>
    {/* <input
      type='hidden'
      name="resolved"
      defaultValue='false'

      ref={register({ required: true, maxLength: 20 })}
    /> */}
    <input type="submit" />
  </form>
);
}

export default connect(null,{postTicket})(CreateTicket);