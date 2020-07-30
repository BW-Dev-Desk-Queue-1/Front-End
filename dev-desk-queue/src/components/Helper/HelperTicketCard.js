import React from 'react';

const HelperTicketCard = props => {
    //create a card that holds info about:
    //ticket category (color stripe + text)
    //age of the ticket
    //ticket title
    //Helpers assigned to ticket
    const daysAgo = () => {
        let today = new Date();
        let createdOn = new Date(props.details.created_at);
        const msInDay = 24 * 60 * 60 * 1000;

        createdOn.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        
        let diff = (+today - +createdOn)/msInDay;
        if(diff < 1){
            return 'today';
        } else if(diff < 2){
            return 'yesterday';
        } else
            return `${Math.ceil(diff)} Days Ago`;
    }

    return(
        <div data-number={props.details.id} className={`ticket-card ${props.details.ticketCategory.toLowerCase()}-category`} onClick={props.handleClick}>
            <div className='timestamp'>{`${daysAgo()}`}</div>
            <div className='card-summary'>
                <p>{props.details.title}</p>
                <h2>{props.details.ticketCategory} Issue</h2>
            </div>
            
        </div>
    );
}

export default HelperTicketCard;