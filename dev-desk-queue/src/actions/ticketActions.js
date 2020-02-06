import { axiosWithAuth } from '../utils/axiosWithAuth'
export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";
export const POST_TICKET_SUCCESS = "POST_TICKET_SUCCESS";
export const POST_TICKET_FAILURE = "POST_TICKET_FAILURE";
export const DELETE_TICKET_SUCCESS = "DELETE_TICKET_SUCCESS"
export const UPDATE_TICKET_SUCCESS = "UPDATE_TICKET_SUCCESS";
export const HELPER_ASSIGN_TICKET = "HELPER_ASSIGN_TICKET";


export const fetchTickets = (userId) => dispatch => {
    dispatch({type:FETCHING_ACTIVITY_START});
    axiosWithAuth().get(`/api/users/${userId}/tickets` )
    .then(res => {
        dispatch({type:FETCHING_ACTIVITY_SUCCESS, payload: res.data.tickets})
    })
    .catch(err => console.log(err))
}
    
export const postTicket = (values, userId) => dispatch => {
    axiosWithAuth()
        .post(`/api/users/${userId}/tickets`, values)
        .then(res => {
            dispatch({ type: POST_TICKET_SUCCESS, payload: res.data })
        })
        .catch(err =>  console.log(err))
}

export const updateTicket = (ticket, userId) => dispatch => {    
    axiosWithAuth()
        .put(`/api/users/${userId}/tickets/${ticket.id}`, ticket)
        .then(res => {
            dispatch({ type: UPDATE_TICKET_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const fetchAllTickets = () => dispatch => {
    dispatch({ type: FETCHING_ACTIVITY_START });
    axiosWithAuth()
        .get(`/api/tickets`)
        .then(res => {
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const deleteTicket = ( ticketId, userId ) => dispatch => {
    dispatch({ type: DELETE_TICKET_SUCCESS });
    axiosWithAuth()
        .delete(`/api/users/${userId}/tickets/${ticketId}`)
        .then(res => {
            dispatch({ type: DELETE_TICKET_SUCCESS, payload: ticketId })
        })
        .catch(err => console.log(err))
}

// export const assignTicket = ( ticket )  => dispatch => {       
//     console.log(`assign ticket?`, ticket) 
//     axiosWithAuth()
//         .put(`/api/tickets/${ticket.id}`, ticket)
        
//         .then(res => {
//             console.log(`Assign Ticket!`, res)
//             dispatch({ type: HELPER_ASSIGN_TICKET, payload: res.data  })
//         })
//         .catch(err => console.log(err))
// }

export const assignTicket = ( ticket )  => dispatch => {       
    console.log(`assign before api`, ticket) 
    axiosWithAuth()
        .put(`/api/tickets/${ticket.id}`, ticket)
        .then(res => {
            console.log(`Assign Ticket! api resonpse`, res)
            dispatch({ type: HELPER_ASSIGN_TICKET, payload: res.data  })
        })
        .catch(err => console.log(err))
}



