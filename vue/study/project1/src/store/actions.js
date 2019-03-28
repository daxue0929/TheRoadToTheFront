import { GET_EMP_ALL_INFO, GET_EMP_BYID, NEW_EMP_REGIST, SHOW_PEOPLE } from "./mutation-types";
import axios from "axios";

const baseURL = "http://localhost:8090/bysj/"
const actions = {
  [GET_EMP_ALL_INFO]({commit}) {
    axios.get(baseURL + 'EmpQueryAllServlet', {})
    .then(function (response) {
      commit({
        type: GET_EMP_ALL_INFO,
        value: response.data
      })
      //控制台打印一下
      window.console.log(response.data);
    })
    .catch(function (error) {
      window.console.log(error)
    });
  },
  [SHOW_PEOPLE]({commit}, input) {
    commit({
      type: SHOW_PEOPLE,
      value: input.value
    })
  },
  [GET_EMP_BYID]({commit}, input) {
    axios.get(baseURL + 'EmpQueryByIdServlet', {
      params: {
        empId: input.value
      }
    }).then(function (res) {
      commit({
        type: GET_EMP_BYID,
        value: res.data
      })
    }).catch(function (msg) {
      window.console.log(msg)
    })
  },
  [NEW_EMP_REGIST]({commit}, input) {
    axios.post(baseURL + "api", {
      empBasicInfo: input.value
    }).then(function (res) {
      commit({
        type: NEW_EMP_REGIST,
        value: res.data
      })
    })
    .catch(function (msg) {
      window.console.log(msg)
    })
  },

}

export default actions
