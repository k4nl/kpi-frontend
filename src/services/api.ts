import axios from 'axios'

const defaultHeaders = {
  'Content-Type': 'application/json'
}

const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 5000,
  headers: defaultHeaders
})

const api = {
  get: (url: string) => instance.get(url),
}

export default api
