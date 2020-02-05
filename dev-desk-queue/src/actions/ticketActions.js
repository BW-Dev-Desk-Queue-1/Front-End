import { axiosWithAuth } from '../utils/axiosWithAuth'
export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";
export const POST_TICKET_SUCCESS = "POST_TICKET_SUCCESS";
export const POST_TICKET_FAILURE = "POST_TICKET_FAILURE";

export const fetchTickets = (userId) => dispatch => {
    dispatch({type:FETCHING_ACTIVITY_START});
    axiosWithAuth().get(`/api/users/${userId}/tickets` )
    .then(res => {
        console.log('Fetch tickets: ',res);
        dispatch({type:FETCHING_ACTIVITY_SUCCESS, payload: res.data.tickets})
    })
    .catch(err => console.log(err))
}
    
export const postTicket = (values, userId) => dispatch => {
    console.log('data: ', values, userId) 
    axiosWithAuth()
        .post(`/api/users/${userId}/tickets`, values)
        .then(res => {
            console.log('posted ticket: ', res)
            dispatch({ type:POST_TICKET_SUCCESS, payload:res.data })
        })
        .catch(err =>  console.log(err))
}

export const fetchAllTickets = () => dispatch => {

    dispatch({ type: FETCHING_ACTIVITY_START });
    axiosWithAuth()
        .get(`/api/tickets`)
        .then(res => {
            console.log('Fetch tickets XXX data 17: ', res.data[17].tickets);
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data[17].tickets })
        })
        .catch(err => console.log(err))
}






