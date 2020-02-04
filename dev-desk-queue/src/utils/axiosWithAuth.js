import axios from 'axios';


const axiosWithAuth = () => {
    return axios.create({
        baseURL: '',    
        headers: {
            Authorization:localStorarge.getItem('token')
        }
    })
}