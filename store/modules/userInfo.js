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
    id: '',
    loadingStatus: 0
  },
  actions: {
    getUserInfo (context, data = {}) {
      if (!data.force && this.loadingStatus) return
      if (getToken()) {
        this.loadingStatus = 1
        return getUserInfoByToken().then(res => {
          if (res.status === 200) {
            context.commit('setInfo', res.data)
            this.loadingStatus = 2
            return true
          } else {
            this.loadingStatus = 0
            return false
          }
        }).catch(error => {
          this.loadingStatus = 0
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
      return {
        id: state.id,
        username: state.username,
        admin: state.admin,
        avatar: state.avatar
      }
    }
  }
}