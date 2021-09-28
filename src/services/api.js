import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';

export const key = API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
