import { axiosWithAuth } from '../utils/axiosWithAuth'
export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";

export const fetchTickets = (id) => dispatch => {
    dispatch({type:FETCHING_ACTIVITY_START});
    axiosWithAuth().get(`/api/users/${id}/tickets` )
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
    
