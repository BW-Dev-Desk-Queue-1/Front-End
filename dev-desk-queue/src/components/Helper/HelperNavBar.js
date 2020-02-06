import React from 'react';
import { useHistory } from 'react-router-dom';

const HelperNavBar = props => {
    //Title of our App at the top (The Queue)
    //div that allows toggle between open and closed tickets
    //Create Ticket button that routes to create ticket page and sends form to back end
    const history = useHistory();
    const logout = () => {
        localStorage.clear()
        history.push("/");
    }
    
    return(
        <div className='sidebar'>
            <div className='title'>The Queue</div>
            <div className='open-closed-tickets-toggle'>
                <div className={`my-tickets ${props.myTicket === 'mine' ? 'active' : ''}`} onClick={props.myTicketClick} status={props.myTicket}>My Tickets</div>
                <div className={`all-tickets ${props.myTicket === 'mine' ? '' : 'active'}`} onClick={props.allTicketClick} status={props.myTicket}>All Tickets</div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default HelperNavBar;