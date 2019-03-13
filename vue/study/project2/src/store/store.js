import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

import Login from './module/login'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    people: {
      id: '1',
      name: 'daxue'
    }
  },
  mutations,
  actions,
  modules: {
    Login
  }
})

export default store;
