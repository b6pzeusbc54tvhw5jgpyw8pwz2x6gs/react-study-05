import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://xo7o026482.execute-api.us-east-1.amazonaws.com/api/v1/',
})
