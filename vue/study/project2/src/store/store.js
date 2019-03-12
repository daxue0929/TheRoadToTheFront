import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    people: {
      id: '1',
      name: 'daxue'
    }
  },
  mutations,
  actions
})

export default store;
