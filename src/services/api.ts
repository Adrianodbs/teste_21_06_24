import axios from 'axios'
import { menu } from './menu';

const baseURL = '/api';
const apiData = axios.create({
  baseURL: baseURL
})

export const fetchMenuData = async () => {
  try {
    const response = await apiData.get('/challenge/menu'); 
    return response.data;
  } catch (error) {
    console.error('Failed to fetch data from API. Using mock data instead.', error);
    return menu; 
  }
};

export default apiData