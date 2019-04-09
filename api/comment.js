import axios from '@/libs/request'

export function addComment (params) {
  return axios.post('/add-comment/', params)
}