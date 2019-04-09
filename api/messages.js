import axios from '@/libs/request'

export function getMessages (params) {
  return axios.post('/get-messages/', params)
}

export function addMessage (params) {
  return axios.post('/add-message/', params)
}
