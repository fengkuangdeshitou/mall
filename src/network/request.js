import axios from 'axios'

export default function request (config) {
  const instance = axios.create({
    baseURL:config.url == '/home/multidata' ? 'http://123.207.32.32:8000' : '/api',
    timeout:5000,
  })
  instance.interceptors.response.use(res=>{
    return res.data
  })
  return instance(config)
}