import axios from 'axios'

const baseURL = 'https://cdn-dev.preoday.com';

const apiData = axios.create({
  baseURL: baseURL
})

export default apiData