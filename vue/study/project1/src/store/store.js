import Vue from 'vue'
import Vuex from 'vuex'

import {SHOW_PEOPLE} from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    person: {
      uuid: '001',
      age: 18,
      name:'奥利奥',
      cls: '计科2班',
      school: '郑州商学院',
      hobby: '音乐',
      iphone: '17344615861'
    },
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.id > 1 )
    }
  },
  mutations: {
    [SHOW_PEOPLE] (state, input) {
      state.person.name = input.value || input
    }
  }
})

export default store
