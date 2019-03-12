import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SHOW_PEOPLE } from './mutation-types'
import { GET_EMP_INFO } from './mutation-types'
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
    objEmp:{},
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
      state.person.name = input.value
    },
    [GET_EMP_INFO] (state, input) {
      state.objEmp = input.value
    }
  },
  actions: {
    [GET_EMP_INFO] ({ commit }) {
      axios.get('http://localhost:8090/bysj/userloginservlet', {
        // params: {
        //   ID: 12345
        // }
      })
      .then(function (response) {
        commit({
          type: GET_EMP_INFO,
          value: response.data[0]
        })
        //控制台打印一下
        console.log(response.data[0]);
      })
      .catch(function (error) {
        console.log(error)
      });
    },
    [SHOW_PEOPLE] ({ commit },input) {
      commit({
        type: SHOW_PEOPLE,
        value: input.value
      })
    }


  }
})

export default store
