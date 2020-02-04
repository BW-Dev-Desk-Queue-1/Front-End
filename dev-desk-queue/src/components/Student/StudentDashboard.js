import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import StudentNavBar from './StudentNavBar.js';
import StudentTicketCardList from './StudentTicketCardList.js';
import StudentTicketPreview from './StudentTicketPreview.js';

import './StudentDashboard.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

const StudentDashboard = () => {
    //Login page routes here
    //Leaving ticket creation page routes here
    //Create div that holds all components of StudentTicketQueue page
    const [ticketOpen, setTicketOpen] = useState('open');
    const [detailedTicket, setDetailedTicket] = useState({});
    const [tickets, setTickets] = useState([])
    const { id } = useParams();
    

    const handleCardClick = number => {
        setDetailedTicket(tickets.find(t => {return t.id === parseInt(number)}));
    }

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        axiosWithAuth()
        .get(`/api/users/${userId}/tickets/` )
        .then(response => {
            
            console.log(`this is the axios response`, response)
        })
        .catch(error => {
            console.log('data not received', error)
        })
    }, [])

    const openClick = () => {
        setTicketOpen('open');
    }
    const closedClick = () => {
        setTicketOpen('closed');
    }
    return (
        <div className='student-dashboard'>
            <StudentNavBar ticketOpen={ticketOpen} openClick={openClick} closedClick={closedClick} />
            <StudentTicketCardList tickets={tickets} status={ticketOpen} onCardClick={handleCardClick} />
            <StudentTicketPreview detailedTicket={detailedTicket}/>
        </div>
    );
}

export default StudentDashboard;