import { getPostType } from '@/api/posts'

export default {
  namespaced: true,
  state () {
    return {
      list: null
    }
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
      list.sort((a, b) => a.sort > b.sort ? 1 : -1)
      state.list = list
    }
  },
  getters: {
    list (state) {
      if (!state.list) return []
      return state.list.filter(item => !item.special)
    },
    manageList (state) {
      return state.list || []
    }
  }
}