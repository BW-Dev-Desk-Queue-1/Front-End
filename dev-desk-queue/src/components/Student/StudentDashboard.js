import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import StudentNavBar from './StudentNavBar.js';
import StudentTicketCardList from './StudentTicketCardList.js';
import StudentTicketPreview from './StudentTicketPreview.js';
import { connect } from 'react-redux';
import { fetchTickets } from '../../actions/ticketActions'

import './StudentDashboard.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

const StudentDashboard = (props) => {
    //Login page routes here
    //Leaving ticket creation page routes here
    //Create div that holds all components of StudentTicketQueue page
    const [ticketOpen, setTicketOpen] = useState('open');
    const [detailedTicket, setDetailedTicket] = useState({});
    // const [tickets, setTickets] = useState([]) to be deleted
    let history = useHistory();
   const [ticketData, setTicetData] = useState();

    const handleCardClick = number => {
        setDetailedTicket(props.tickets.find(t => {return t.id === parseInt(number)}));
    }

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        props.fetchTickets(userId)
        history.push("/dashboard")
    }, [])

    const openClick = () => {
        setTicketOpen('open');
    }
    const closedClick = () => {
        setTicketOpen('closed');
    }
    if (props.tickets){
  return (

        <div className='student-dashboard'>
            <StudentNavBar ticketOpen={ticketOpen} openClick={openClick} closedClick={closedClick} />
            <StudentTicketCardList tickets={props.tickets} status={ticketOpen} onCardClick={handleCardClick} />
            <StudentTicketPreview detailedTicket={detailedTicket}/>
        </div>
     )
  } else {
      return (<div> Loading ticket data...</div>)
  }
}
const mapStateToProps= (state) => {
    return {
        loading: state.TicketReducer.loading,
        errors: state.TicketReducer.errors,
       
        tickets: state.TicketReducer.tickets
    }
}

export default connect(mapStateToProps, {fetchTickets})(StudentDashboard);