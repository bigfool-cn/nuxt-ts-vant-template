import Axios from 'axios'

const instance = Axios.create({
  baseURL: process.env.baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = '12'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const resp = response.data
    if (resp.code !== 0) {
      return Promise.reject(resp.message)
    } else {
      return resp
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
