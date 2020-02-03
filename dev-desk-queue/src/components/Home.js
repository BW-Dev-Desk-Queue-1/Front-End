import React from 'react';
import Ticket from './Ticket';
import CreateTicket from './create_ticket/CreateTicket'

const Home = () => {
    return (
        <div>
            <Ticket />
            <CreateTicket />
        </div>
    )
}
export default Home;