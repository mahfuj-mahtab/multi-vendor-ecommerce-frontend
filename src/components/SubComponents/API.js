import axios from "axios";
export const api = 'http://127.0.0.1:8000';

const API = axios.create({
    baseURL : api,
    headers : {
        'Content-Type' : 'application/json'
    },
    withCredentials : true
})
API.interceptors.request.use(async (config)=>{
    let token = localStorage.getItem('accessToken')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config

},
(error)=>{
    return Promise.reject(error)
})

API.interceptors.response.use(async (response)=>{
    return response
},
async (error)=>{
    if(error.response.status === 403){
        
        try {
            const {data} = await axios.get('/api/v1/users/refresh-token')
            localStorage.setItem('accessToken', data.accessToken)
            error.config.headers.Authorization = `Bearer ${data.accessToken}`
            return API(error.config)
        } catch (error) {
            localStorage.removeItem('accessToken')
            window.location.href = '/login'
        }
    }
   
    return Promise.reject(error)
})
export default API