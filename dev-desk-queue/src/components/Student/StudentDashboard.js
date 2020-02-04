import React, { useState } from 'react';
import StudentNavBar from './StudentNavBar.js'
import TicketCardList from '../GeneralComponents/TicketCardList.js';
import StudentTicketPreview from './StudentTicketPreview.js';

import './StudentDashboard.css';

const StudentDashboard = () => {
    //Login page routes here
    //Leaving ticket creation page routes here
    //Create div that holds all components of StudentTicketQueue page
    const [ticketOpen, setTicketOpen] = useState('open');
    const [detailedTicket, setDetailedTicket] = useState({});
    const [tickets, setTickets] = useState([
        {
            "id": 1,
            "title": "progress report",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis at metus sed pellentesque. Aenean tincidunt pharetra accumsan. Morbi nunc justo, efficitur hendrerit dictum vitae, auctor nec dolor. Proin efficitur.",
            "ticketCategory": "equipment",
            "created_at": "2020-02-04 07:34:54",
            "user_id": 2,
            "resolved": false,
            "helper_id": 1,
            "tried": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex ex, commodo ac nisi ac, facilisis laoreet augue. Sed in leo felis. Proin vitae tristique ex, id suscipit mi. Maecenas."
        },
        {
            "id": 2,
            "title": "test 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt turpis a bibendum bibendum. Vivamus ut nunc massa. Phasellus elit turpis, malesuada pretium interdum in, vehicula at ligula. Ut vulputate.",
            "ticketCategory": "finance",
            "created_at": "2020-02-03 07:34:54",
            "user_id": 2,
            "resolved": false,
            "helper_id": 1,
            "tried": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo nisl ultrices congue suscipit. Fusce aliquam sagittis ante sed feugiat. Nunc et auctor nisl. Sed blandit eros sit amet nisl."
        },
        {
            "id": 3,
            "title": "test 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed orci eget ipsum volutpat pellentesque quis non tellus. Praesent eget tincidunt lorem. Etiam erat augue, dictum sodales turpis in, tincidunt.",
            "ticketCategory": "people",
            "created_at": "2020-01-11 07:34:54",
            "user_id": 2,
            "resolved": true,
            "helper_id": 1,
            "tried": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lorem vitae nisi laoreet, nec placerat diam tristique. Nullam suscipit id turpis non dictum. Donec hendrerit finibus ipsum, eget fermentum."
        },
        {
            "id": 4,
            "title": "test 4",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac magna efficitur, auctor felis vel, rutrum lacus. Fusce vitae iaculis mauris. Vivamus vehicula lacus velit, quis maximus enim faucibus vitae.",
            "ticketCategory": "track",
            "created_at": "2019-12-04 07:34:54",
            "user_id": 2,
            "resolved": false,
            "helper_id": 1,
            "tried": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar vulputate porta. Pellentesque porttitor et enim posuere dictum. Nullam metus nulla, maximus quis consequat sed, scelerisque quis nibh. Aliquam mollis."
        },
        {
            "id": 5,
            "title": "test 5",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at diam a libero aliquam aliquet accumsan vel dolor. In sit amet tellus in arcu feugiat tempor. In sagittis purus eu.",
            "ticketCategory": "other",
            "created_at": "2012-02-04 07:34:54",
            "user_id": 2,
            "resolved": true,
            "helper_id": 1,
            "tried": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis pretium sapien, at laoreet turpis pharetra nec. Proin consectetur sem at tortor lobortis consectetur vel eget arcu. Sed urna leo."
        }
    ]);

    const handleCardClick = number => {
        setDetailedTicket(tickets.find(t => {return t.id === parseInt(number)}));
    }

    // useEffect(() => {
    //     axios
    //     .get(/* api address here */)
    //     .then(response => {
    //         setTickets(response.tickets);
    //     })
    //     .catch(error => {
    //         console.log('data not received', error)
    //     })
    // }, [])

    const openClick = () => {
        setTicketOpen('open');
    }
    const closedClick = () => {
        setTicketOpen('closed');
    }
    return (
        <div className='student-dashboard'>
            <StudentNavBar ticketOpen={ticketOpen} openClick={openClick} closedClick={closedClick} />
            <TicketCardList tickets={tickets} status={ticketOpen} onCardClick={handleCardClick} />
            <StudentTicketPreview detailedTicket={detailedTicket}/>
        </div>
    );
}

export default StudentDashboard;