import React from 'react';
import { Link, Route } from 'react-router-dom';

const StudentNavBar = props => {
    //Title of our App at the top (The Queue)
    //div that allows toggle between open and closed tickets
    //Create Ticket button that routes to create ticket page and sends form to back end
    

    return(
        <div className='sidebar'>
            <div className='title'>The Queue</div>
            <div className='open-closed-tickets-toggle'>
                <div className={`open-tickets ${props.ticketOpen === 'open' ? 'active' : ''}`} onClick={props.openClick} status={props.ticketOpen}>Open Tickets</div>
                <div className={`closed-tickets ${props.ticketOpen === 'open' ? '' : 'active'}`} onClick={props.closedClick} status={props.ticketOpen}>Closed Tickets</div>
            </div>
            <div className='create-ticket-button' onClick={props.createTicket}>Create Ticket</div>
        </div>
    );
}



export default StudentNavBar;