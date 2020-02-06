import React from 'react';
import HelperTicketCard from './HelperTicketCard.js';

import './HelperDashboard.css';

const HelperTicketCardList = props => {
    //create a div that holds TicketCards
    //map through data and create a TicketCard for each item pulled

    const handleClick = event => {
        console.log(event)
        props.onCardClick(event.target.getAttribute('data-number'));
    }

    return(
        <div className='ticket-list'>
            <div className={`mine ${props.status === 'mine' ? '' : 'hidden'}`}>
                {props.tickets.map(t => (
                    (t.helper_id === props.helperId) && (t.resolved !== true) ? <HelperTicketCard key={t.id} details={t} handleClick={handleClick} /> : <></>
                ))}
            </div>
            <div className={`all ${props.status === 'mine' ? 'hidden' : ''}`}>
                {props.tickets.map(t => (
                    t.helper_id === null ?
                    <HelperTicketCard key={t.id} details={t} handleClick={handleClick} /> : <></>
                ))}
            </div>
        </div>
    );
}

export default HelperTicketCardList;