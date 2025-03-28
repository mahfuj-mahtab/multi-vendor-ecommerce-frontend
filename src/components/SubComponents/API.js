import axios from "axios";

export const api = 'https://ecomapi.mahfujmohot.com';

const API = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});


API.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


API.interceptors.response.use(
    (response) => response, 
    async (error) => {
        const originalRequest = error.config;

       
        if (error.response && (error.response.status === 403 || error.response.status === 401)) {
            try {
             
                const { data } = await axios.get(`${api}/api/v1/users/refresh-token`, { withCredentials: true });

                
                localStorage.setItem('accessToken', data.accessToken);

           
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
                return API(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token expired or invalid:", refreshError);

                
                localStorage.removeItem('accessToken');
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

export default API;
