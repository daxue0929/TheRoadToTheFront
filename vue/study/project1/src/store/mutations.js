import {
  ADMIN_LOGIN,
  GET_EMP_ALL_INFO,
  GET_EMP_BYID,
  NEW_EMP_REGIST,
  SET_EMP_ID,
  SHOW_PEOPLE,
  USER_LOGIN
} from "./mutation-types";

const mutations = {
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
  },
  [ADMIN_LOGIN](state,input) {
    state.isAdminLogin = input.value
  },
  [USER_LOGIN](state, input) {
    state.isUserLogin = input.value
  }
}

export default mutations
