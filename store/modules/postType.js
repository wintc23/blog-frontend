import { getPostType } from '@/api/posts'

export default {
  namespaced: true,
  state: {
    list: null,
  },
  actions: {
    getType ({ commit, state }, data = {}) {
      if (!data.force && state.list) return
      getPostType().then(res => {
        if (res.status == 200) {
          commit('setPostType', res.data.list)
        }
      })
    }
  },
  mutations: {
    setPostType (state, list) {
      state.list = list
    }
  },
  getters: {
    list (state) {
      return state.list
    }
  }
}