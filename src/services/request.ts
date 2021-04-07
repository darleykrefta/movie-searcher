import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000
})

export const get = (url: string, config = {}) => instance.get(url, config)
