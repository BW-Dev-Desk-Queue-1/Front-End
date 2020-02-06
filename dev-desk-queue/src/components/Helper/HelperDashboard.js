import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchAllTickets, deleteTicket } from "../../actions/ticketActions"
import HelperNavBar from './HelperNavBar.js'
import HelperTicketCardList from './HelperTicketCardList.js';
import HelperTicketPreview from './HelperTicketPreview.js';
import './HelperDashboard.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import axios from 'axios';

import { Redirect } from 'react-router-dom'

const HelperDashboard = props => {
    //Login page routes here
    //Leaving ticket creation page routes here
    //Create div that holds all components of HelperTicketQueue page
    const [myTicket, setMyTicket] = useState('all');
    const [detailedTicket, setDetailedTicket] = useState({});
    let history = useHistory();
    let userId = localStorage.getItem('userId')

    const handleCardClick = number => {
        setDetailedTicket(tickets.find(t => {return t.id === parseInt(number)}));
    }

    useEffect(() => {
        props.fetchAllTickets()
        history.push("/dashboard")
    }, [])

    const myTicketClick = () => {
        setMyTicket('mine');
    }
    const allTicketClick = () => {
        setMyTicket('all');
    }

    const deleteATicket = (ticketId) => {
        
        props.deleteTicket(ticketId, userId)
        props.fetchAllTickets()
        setDetailedTicket({});
        history.push("/dashboard")
     }

    if(!props.tickets) {
        return <div>Loading...</div>        
    } else {    
        return (
            <div className='helper-dashboard'>
                <HelperNavBar myTicket={myTicket} myTicketClick={myTicketClick} allTicketClick={allTicketClick} />
                <HelperTicketCardList helperId={userId} tickets={props.tickets} status={myTicket} onCardClick={handleCardClick} />
                <HelperTicketPreview detailedTicket={detailedTicket} deleteATicket={deleteATicket} 
                />
            </div>
        );
    }
    
}

const mapStateToProps= (state) => {
    return {
        loading: state.TicketReducer.loading,
        errors: state.TicketReducer.errors,       
        tickets: state.TicketReducer.tickets
    }
}

export default connect (mapStateToProps, {fetchAllTickets, deleteTicket})(HelperDashboard);