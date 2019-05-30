import {
  ADMIN_LOGIN,
  GET_EMP_ALL_INFO,
  GET_EMP_BYID,
  NEW_EMP_REGIST,
  UPDATE_EMP_ITEM,
  USER_LOGIN
} from "./mutation-types";
import axios from "axios";
import { baseURL } from "../util/config";

const actions = {
  
  //普通员工完善个人信息
  [UPDATE_EMP_ITEM] ({commit}) {
    // axios.get(baseURL+'',{
    //
    // })
    // .then(function (response) {
    //   commit({
    //     type: UPDATE_EMP_ITEM,
    //     value:response.data
    //   })
    // })
    // .catch(function (msg) {
    //   window.console.log(msg)
    // })
  },

  //管理员获取所有的员工信息
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
  [ADMIN_LOGIN]({commit}, input) {
    window.console.log(input)
    axios.get(baseURL + 'AdminLoginServlet', {
      params: {
        id: input.form.empId,
        passWord: input.form.passWord
      }
    }).then(function (res) {
      window.console.log(res)
      commit({
        type: ADMIN_LOGIN,
        value: res.data
      })
    })
  },
  [USER_LOGIN]({commit},input) {
    axios.get(baseURL+ 'EmpLoginServlet',{
      params: {
        id: input.form.empId,
        passWord: input.form.passWord
      }
    }).then(function (res) {
      commit({
        type:USER_LOGIN,
        value: res.data
      })
    }).catch(function (msg) {
      window.console.log(msg)
    })
  }
}

export default actions
