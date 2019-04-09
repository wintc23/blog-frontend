import axios from '@/libs/request'

export function getPosts(params) {
  return axios.post('/get-posts/', params)
}

export function getPost(id) {
  return axios.get(`/get-post/${id}`)
}

export function getPostType() {
  return axios.get('/get-post-type/')
}