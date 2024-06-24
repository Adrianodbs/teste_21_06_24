import axios from 'axios'

const baseURL = import.meta.env.NEXT_PUBLIC_API_URL || '/api';
const apiData = axios.create({
  baseURL: baseURL
})

export default apiData