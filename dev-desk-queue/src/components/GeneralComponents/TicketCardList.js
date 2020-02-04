import React from 'react';
import TicketCard from './TicketCard.js';

import './TicketCards.css';

const TicketCardList = props => {
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
                    !t.resolved ? <TicketCard key={t.id} details={t} handleClick={handleClick} /> : <></>
                ))}
            </div>
            <div className={`closed ${props.status === 'open' ? 'hidden' : ''}`}>
                {props.tickets.map(t => (
                    t.resolved ? <TicketCard key={t.id} details={t} handleClick={handleClick} /> : <></>
                ))}
            </div>
        </div>
    );
}

export default TicketCardList;