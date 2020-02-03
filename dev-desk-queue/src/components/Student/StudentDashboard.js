import React from 'react';
import StudentNavBar from './StudentNavBar.js'
import TicketCardList from '../Helper/node_modules/..GeneralComponents/TicketCardList';
import StudentTicketPreview from './StudentTicketPreview.js';

const StudentTicketQueue = () => {
    //Login page routes here
    //Leaving ticket creation page routes here
    //Create div that holds all components of StudentTicketQueue page
    return (
        <div className='student-dashboard'>
            <StudentNavBar/>
            <TicketCardList/>
            <StudentTicketPreview/>
        </div>
    );
}

export default StudentTicketQueue;