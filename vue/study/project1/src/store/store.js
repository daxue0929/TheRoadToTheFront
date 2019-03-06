import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    age: 18,
    name:'奥利奥'
  },
  mutations: {
    showPeople(state, input) {
      state.name = input.value
    }
  }
})

export default store
