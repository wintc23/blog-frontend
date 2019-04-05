import axios from 'axios'
import { getToken, clearToken } from '@/libs/tool'
import iView from 'iview'
import { BASE_URL } from '@/libs/config'

const beforeRequest = (config) => {
  let token = getToken()
  config.headers = config.headers || {}
  if (token && !config.headers['Authorization']) {
    config.headers['Authorization'] = token
  }
  return config
}

function requestError (error) {
  return Promise.reject(error)
}

function resPreHandle (response) {
  if (response.data && response.data.notify) {
    iView.Message.success(response.data.message)
  }
  return response
}

function responseError (error) {
  if (error.response.data && error.response.data.notify) {
    iView.Message.error(error.response.data.message)
  }
  if (error.response.status === 401) {
    clearToken()
  }
  return Promise.reject(error)
}

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 60 * 1000,
})

instance.interceptors.request.use(beforeRequest, requestError)
instance.interceptors.response.use(resPreHandle, responseError)

export default instance