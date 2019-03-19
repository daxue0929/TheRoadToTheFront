import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    number: 12
  },
  mutations: {
    addNumber: (state) => {
      const obj = state
      obj.number += 1
    }
  },
  actions: {
    addNumber: ({commit}) => {
      commit('addNumber')
    }
  }
})

export default store
