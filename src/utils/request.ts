import axios from 'axios'
import { useMessage } from 'naive-ui'

const message = useMessage()

const baseApi = import.meta.env.VITE_APP_API_URL || ''
const service = axios.create({
  baseURL: baseApi,
  timeout: 6000
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {

    // You can change this part for your own usage.
    const res = response.data
    if (res.code === 200) {
      return res.result
    } else {
      message.error(res.message)
      return Promise.reject(new Error(res.message))
    }
  },
  (error) => {
    message.error('接口异常')
    return Promise.reject(error)
  }
)

export default service
