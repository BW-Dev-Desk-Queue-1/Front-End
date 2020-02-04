import axios from 'axios';


const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://dev-help-desk.herokuapp.com',    
        headers: {
            Authorization:localStorarge.getItem('token')
        }
    })
}