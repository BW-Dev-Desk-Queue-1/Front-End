import React from 'react';
import './HelperDashboard.css';


const HelperTicketPreview = props => {
    //creates a div that shows expanded information about the selected card in the card list
    //preview contains:
    //ticket title
    //ticket category
    //description of issue
    //what I've tried
    //if open ticket: edit button
    //if closed ticket: reopen button
    const userId = localStorage.getItem('userId')
    const isEmpty = obj => {
        for(var prop in obj){
            if(obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
    

   
    return(
        <div className='preview-panel'>
            <div className={`detailed-card ${isEmpty(props.detailedTicket) ? 'hidden' : ''}`}>
                <p>{props.detailedTicket.title}</p>
                <h2>{props.detailedTicket.ticketCategory} Issue</h2>
                <h3>Description of Issue:</h3>
                <p>{props.detailedTicket.description}</p>
                <h3>What I've tried:</h3>
                <p>{props.detailedTicket.tried}</p>
                <button className='assign'>Assign</button>
                <button className='delete' onClick={()=> props.deleteATicket(props.detailedTicket.id)}>Delete</button>
                
            </div>
        </div>
    );
}

export default HelperTicketPreview;