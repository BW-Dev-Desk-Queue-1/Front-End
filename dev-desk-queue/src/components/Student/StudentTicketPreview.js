import React, { useState } from 'react';
import './StudentDashboard.css';

const StudentTicketPreview = props => {
    //creates a div that shows expanded information about the selected card in the card list
    //preview contains:
    //ticket title
    //ticket category
    //description of issue
    //what I've tried
    //if open ticket: edit button
    //if closed ticket: reopen button
    let userId = localStorage.getItem('userId')
    const [edit, setEdit] = useState(false);
    
    const isEmpty = obj => {
        for(var prop in obj){
            if(obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }

    const updateATicket = (ticketId) => {                
        props.updateTicket(ticketId, userId)
        setEdit(false);
    }

    const handleEditChanges = e => {
        e.preventDefault();
        props.setDetailedTicket({
            ...props.detailedTicket,
            [e.target.name]: e.target.value
            
        })
    }


    return(
        <div className='preview-panel'>
            {!edit && (
            <div className={`detailed-card ${isEmpty(props.detailedTicket) ? 'hidden' : ''}`}>
                <p>{props.detailedTicket.title}</p>
                <h2>{props.detailedTicket.ticketCategory} Issue</h2>
                <h3>Description of Issue:</h3>
                <p>{props.detailedTicket.description}</p>
                <h3>What I've tried:</h3>
                <p>{props.detailedTicket.tried}</p>
                <button className={`reopen ${props.detailedTicket.resolved ? '' : 'hidden'}`}>Reopen</button>
                <button 
                    className={`edit ${props.detailedTicket.resolved ? 'hidden' : ''}`}
                    onClick={() => setEdit(true)}
                >Edit</button>
            </div>
            )}
        {edit && (            
            <form onSubmit={() => updateATicket(props.detailedTicket.id)}>
               <label>Title: 
                   <input 
                   name="title"
                   onChange={handleEditChanges}
                   value={props.detailedTicket.title}
                /></label>               
               <label>Category: 
                   <input 
                   name="ticketCategory" 
                   onChange={handleEditChanges}
                   value={props.detailedTicket.ticketCategory}/
                ></label>
               <label>Description: 
                   <input 
                   name="description" 
                   onChange={handleEditChanges}
                   value={props.detailedTicket.description}
                /></label>
               <label>Tried: 
                   <input 
                   name="tried" 
                   onChange={handleEditChanges}
                   value={props.detailedTicket.tried}
                /></label>
                <button onSumbit={() => updateATicket(props.detailedTicket.id)}>Update</button>
                <button onClick={() => setEdit(false)}>Cancel</button>
            </form>      
        )}

        </div>
    );
}

export default StudentTicketPreview;