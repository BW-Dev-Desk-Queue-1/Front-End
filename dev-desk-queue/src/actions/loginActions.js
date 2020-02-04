import axios from 'axios'

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";

export const fetchLogin = (id) => dispatch => {
    dispatch({type:USER_LOGIN_START});
    axios.post(`api/users/${id}/tickets`)
    .then(res => dispatch({type:USER_LOGIN_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type:USER_LOGIN_ERROR, payload: err}))

}