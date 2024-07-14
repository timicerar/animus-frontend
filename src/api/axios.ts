import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_DOMAIN,
});

export { apiInstance };
