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

export function deletePost (postId) {
  return axios.get(`/delete-post/${postId}`)
}

export function savePost (params) {
  return axios.post(`/save-post/`, params)
}

export function addPost (type) {
  return axios.get(`/add-post/${type}`)
}

export function savePostImage (data) {
  return axios.put('/save-image/', data, {
    headers: {
      'content-Type': 'multipart/form-data'
    }
  })
}