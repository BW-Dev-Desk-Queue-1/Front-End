import React from 'react';
import { useHistory } from "react-router-dom";

import './HelperDashboard.css';


const HelperTicketPreview = props => {
    //creates a div that shows expanded information about the selected card in the card list
    //preview contains:
    //ticket title
    //ticket category
    //description of issue
    //what I've tried
    //if open ticket: edit button
    //if closed ticket: reopen button
    // const [messy, setMessy] = useState({
    //     id: props.detailedTicket.id,
    //     title: props.detailedTicket.title,
    //     description: props.detailedTicket.description,
    //     ticketCategory: props.detailedTicket.ticketCategory,
    //     created_at: props.detailedTicket.created_at,
    //     tried: props.detailedTicket.tried,
    //     user_id: props.detailedTicket.user_id,
    //     resolved: props.detailedTicket.resolved,
    //     helper_id: props.detailedTicket.helper_id
    // })
    let history = useHistory();

    const userId = JSON.parse(localStorage.getItem('userId'))
    const isEmpty = obj => {
        for(var prop in obj){
            if(obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }

    const helperId = () => {
        props.setDetailedTicket({
            ...props.detailedTicket,
            helper_id: userId,
        });
     }
     const assignATicket = (ticket) => { 
        helperId()     
        props.assignTicket(ticket)
        props.setDetailedTicket({})
        history.push("/dashboard")
    }

    const unAssignHelperId = () => {
        props.setDetailedTicket({
            ...props.detailedTicket,
            helper_id: null,
        });
     }
   

    const returnATicket = (ticket) => { 
        unAssignHelperId();
        props.assignTicket(ticket)
        props.setDetailedTicket({})
        history.push("/dashboard")
    }

    const resolveTickerHelper = () => {
        props.setDetailedTicket({
            ...props.detailedTicket,
            resolved: true,
        });
     }

     const resolveATicket=(ticket) => {
        resolveTickerHelper();
        props.assignTicket(ticket)
        props.setDetailedTicket({})
        
        history.push("/dashboard")
    
         
     }
   
    return(
        <div className='preview-panel'>
            <div className={`detailed-card ${isEmpty(props.detailedTicket) ? 'hidden' : ''}`}>
                <p>{props.detailedTicket.title}</p>
                <h2>{props.detailedTicket.ticketCategory} Issue</h2>
                <h3>Description of Issue:</h3>
                <p>{props.detailedTicket.description}</p>
                <h3>What I've tried:</h3>
                <p>{props.detailedTicket.tried}</p>
                {/* <button className='assign' onClick={()=> assignATicket({ 
                        id: props.detailedTicket.id,
                        helper_id: props.detailedTicket.helper_id
                        } 
                    )}>Assign</button> */}
               
                
    {props.detailedTicket.helper_id===userId ? (<div>
        <button className="return" onClick={()=> returnATicket({ 
        id: props.detailedTicket.id,
        helper_id: null
        } 
    )}>Return</button>
        <button className="assign" onClick={()=> resolveATicket({ 
        id: props.detailedTicket.id,
        resolved: true
        } 
    )}>Resolve</button>
        <button className='delete' onClick={()=> props.deleteATicket(props.detailedTicket.id)}>Delete</button> 
        </div>)
    : (<button className='assign' onClick={()=> assignATicket({ 
        id: props.detailedTicket.id,
        helper_id: userId
        } 
    )}>Assign</button>)}              
            </div>
        </div>
    );
}

export default HelperTicketPreview;