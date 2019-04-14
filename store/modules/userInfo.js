// 当前用户信息
import { getUserInfoByToken } from '@/api/user'

import { getToken, clearToken } from '@/libs/tool'
import { BASE_URL } from '@/libs/config'

export default {
  namespaced: true,
  state: {
    username: '',
    avatar: '',
    admin: false,
    id: ''
  },
  actions: {
    getUserInfo (context) {
      if (getToken()) {
        getUserInfoByToken().then(res => {
          if (res.status === 200) {
            context.commit('setInfo', res.data)
          }
        }).catch(error => {
          clearToken()
        })
      }
    }
  },
  mutations: {
    setInfo (state, data) {
      for (let key in data) {
        state[key] = data[key]
      }
      if (data.avatar) {
        state.avatar = `${BASE_URL}/get-file/?filename=${data.avatar}&path=avatar`
      }
    },
    clearInfo (state) {
      state.username = ''
      state.avatar = ''
      state.admin = false
      state.id = ''
    }
  },
  getters: {
    info (state) {
      return state
    }
  }
}