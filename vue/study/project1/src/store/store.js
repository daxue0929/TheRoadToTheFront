import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import { GET_EMP_BYID, NEW_EMP_REGIST, SET_EMP_ID, SHOW_PEOPLE } from './mutation-types'
import { GET_EMP_ALL_INFO } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    empAllInfoTableData: [],
    companyTitle:'微软科技',
    person: {
      uuid: '001',
      age: 18,
      name: '奥利奥',
      cls: '计科2班',
      school: '郑州商学院',
      hobby: '音乐',
      iphone: '17344615861'
    },
    empId:'',
    empName: '',
    objEmp: {},
    todo: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ],
    test:0
  },
  getters: {
    doneTodo: state => {
      return state.todo.filter(todo => todo.id > 1)
    }
  },
  mutations: {
    [SHOW_PEOPLE](state, input) {
      state.person.name = input.value
    },
    [GET_EMP_ALL_INFO](state,input) {
      state.empAllInfoTableData = input.value
    },
    [GET_EMP_BYID](state, input){
      state.objEmp = input.value
    },
    [SET_EMP_ID](state, input){
      state.empId = input.value
    },

    //注册和新增emp mutation
    [NEW_EMP_REGIST](state,input) {
      state.test = 2
      window.console.log(input.value)
    }
  },
  actions
})

export default store
