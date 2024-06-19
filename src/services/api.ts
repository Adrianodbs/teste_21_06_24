import axios from 'axios'

const baseURL = '/api';

const apiData = axios.create({
  baseURL: baseURL
})

export default apiData