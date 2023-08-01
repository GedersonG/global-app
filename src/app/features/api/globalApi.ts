import axios from 'axios';

export const globalApi = axios.create({
    baseURL: import.meta.env.VITE_API_BACKEND_URL
});

globalApi.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
  
    return config;
});
