import axios, { AxiosError } from 'axios';
import { getToken } from './tokenService';
 

const http_api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getToken()}`,
  },
 
});

http_api.interceptors.response.use(
  (responce: any) => responce,
  (error: AxiosError) => {
    console.log('catched', error);
    switch (error.response?.status) {
      case 401: {
        
        break;
      }
      case 403: {
       
        break;
      }
      case 422: {
        console.log('422', error);
        
        break;
      }
    }
    if (error.code == 'ERR_NETWORK') {
      window.location.href = '/auth/signin';
    }
    return Promise.reject(error);
  },
);

export default http_api;
