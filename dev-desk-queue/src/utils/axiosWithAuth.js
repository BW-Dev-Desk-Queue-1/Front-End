import axios from 'axios';


export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://dev-help-desk.herokuapp.com',    
        headers: {
            Authorization:localStorage.getItem('token')
        }
    })
}