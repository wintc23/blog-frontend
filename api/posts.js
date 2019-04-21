import axios from '@/libs/request'
import uuidv4 from 'uuid/v4'

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

export function savePostImage (file, callback) {
  let filename = uuidv4().replace(/-/g, '')
  getFileUploadToken(filename).then(res => {
    if (res.status == 200) {
      let { token, domain } = res.data
      let formData = new FormData()
      formData.append('file', file)
      formData.append('token', token)
      formData.append('key', filename)
      axios.post('http://up-z2.qiniup.com/', formData, {
        headers: {
          'Authorization': token,
          'content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response)
        if (response.status == 200) {
          let url = `${domain}/${response.data.key}`
          callback && callback(url)
        }
      })
    }
  })
}

export function getFileUploadToken (filename) {
  return axios.get(`/get-qiniu-token/${filename}`)
}

export function getAboutMe () {
  return axios.get('/get-about-me/')
}

export function likePost (postId) {
  return axios.get(`/like-post/${postId}`)
}

export function cancelLikePost (postId) {
  return axios.get(`/cancel-like-post/${postId}`)
}