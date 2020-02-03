import React from 'react';
import Title from '../GeneralComponents/Title.js';
import HelperTicketCategories from './HelperTicketCategories.js';
import Menu from '../GeneralComponents/Menu.js';
import TicketCardList from '..GeneralComponents/TicketCardList';
import TicketPreview from '../GeneralComponents/TicketPreview.js';

const HelperTicketQueue = () => {
    //Create div that holds all components of StudentTicketQueue page
    return (
        <div className='helper-ticket-queue'>
            <Title/>
            <HelperTicketCategories/>
            <Menu/>
            <TicketCardList/>
            <TicketPreview/>
        </div>
    );
}

export default HelperTicketQueue;