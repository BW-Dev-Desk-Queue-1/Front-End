import React from "react";
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import { postTicket } from "../../actions/ticketActions"

import './CreateTicket.css';

const CreateTicket = props => {
    const {register, handleSubmit, watch, errors, formState } = useForm(); 
    let history = useHistory();

    const onSubmit = data => {
      console.log('something')
      const userId = localStorage.getItem('userId');
      props.postTicket(data, userId);
      props.closeTicket()
    }
    ;
    
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
          className={`ticket-title ${errors.title ? 'input-error' : ''}`}
        />
        <label><span className='red'>*</span> What is this issue about?</label>
        <select name="ticketCategory" className={`${errors.category ? 'input-error' : ''}`} ref={register({ required: true })}>
          <option value='Equipment'>Equipment</option>
          <option value='People'>People</option>
          <option value='Track'>Track</option>
          <option value='Finances'>Finances</option>
          <option value='Other'>Other</option>
        </select>
        <label><span className='red'>*</span> Description</label>
        <textarea name="description" rows='4' cols='70' className={`${errors.description ? 'input-error' : ''}`} ref={register({ required: true })} />
        <label><span className='red'>*</span> What have you tried?</label>
        <textarea name="tried" rows='4' cols='70' className={`${errors.tried ? 'input-error' : ''}`} ref={register({ required: true })}/>
        <div className='submit-container'><input type="submit" className={`submit`} /></div>
      </form>
    </div>
  </div>
);
}

export default connect(null,{postTicket})(CreateTicket);