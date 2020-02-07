import React from 'react';
import StudentTicketCard from './StudentTicketCard.js';

import './StudentDashboard.css';

const StudentTicketCardList = props => {
    //create a div that holds TicketCards
    //map through data and create a TicketCard for each item pulled

    const handleClick = event => {
        console.log(event)
        props.onCardClick(event.target.getAttribute('data-number'));
    }

    return(
        <div className='ticket-list'>
            <div className={`open ${props.status === 'open' ? '' : 'hidden'}`}>
                {props.tickets.map(t => (
                    !t.resolved ? <StudentTicketCard key={t.id} details={t} handleClick={handleClick} /> : <></>
                ))}
            </div>
            <div className={`closed ${props.status === 'open' ? 'hidden' : ''}`}>
                {props.tickets.map(t => (
                    t.resolved ? <StudentTicketCard key={t.id} details={t} handleClick={handleClick} /> : <></>
                ))}
            </div>
        </div>
    );
}

export default StudentTicketCardList;