import React from 'react';
import Title from '../GeneralComponents/Title.js';
import StudentTicketCategories from './StudentTicketCategories.js';
import Menu from '../GeneralComponents/Menu.js';
import TicketCardList from '..GeneralComponents/TicketCardList';
import TicketPreview from '../GeneralComponents/TicketPreview.js';

const StudentTicketQueue = () => {
    //Create div that holds all components of StudentTicketQueue page
    return (
        <div className='student-ticket-queue'>
            <Title/>
            <StudentTicketCategories/>
            <Menu/>
            <TicketCardList/>
            <TicketPreview/>
        </div>
    );
}

export default StudentTicketQueue;