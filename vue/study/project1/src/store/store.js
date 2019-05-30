import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    courseAllData: [],
    empName: '王小二',
    isAdminLogin: Boolean,   //标记管理员用户是否登录了 true登录

    isWhoUserLogin:String ,   //是哪个用户登录就是那个普通用户的empId
    person: {
      uuid: '001',
      age: 18,
      name: '奥利奥',
      cls: '计科2班',
      school: '郑州商学院',
      hobby: '音乐',
      iphone: '17344615861'
    },
    empMsg:{
      empName:'张三',
      empId:'1234',
      empCompanyName:'微软科技',
      empSex:'男',
      empNativePlace:'北京市朝阳区一号',
      empNationality: '中国',
      empNation: '汉族',
      empMaritalStatus: '未婚',
      empWorkYear: '10年',
      empStatus: '就职',
      empHomeAddress: '员工宿舍一号',
      empPhoneNumber: '17856093817',
      empIdNumber: '1890679658418022819'
    },
    courseArr:[
      {courseId: 1, courseName: '物理学', courseHour:'30天',autograph:'物理引领了人类',empId:1,t_id:2},
      {courseId: 2, courseName: '生物学', courseHour:'20天',autograph:'生物学是伟大的',empId:1,t_id:1},
      {courseId: 3, courseName: '语文学', courseHour:'18天',autograph:'语文言文学博大',empId:1,t_id:1},
      {courseId: 4, courseName: '地理学', courseHour:'10天',autograph:'地理学一点好了',empId:2,t_id:1},
      {courseId: 5, courseName: '政治学', courseHour:'7天',autograph: '每人都懂点政治',empId:2,t_id:2},
      {courseId: 6, courseName: '语言学', courseHour:'40天',autograph:'探索语言的奥秘',empId:2,t_id:1},
      {courseId: 7, courseName: '心理学', courseHour:'13天',autograph:'分析信心理之路',empId:1,t_id:2},
      {courseId: 8, courseName: '天文学', courseHour:'7天',autograph: '每人都懂点政治',empId:3,t_id:2},
      {courseId: 9, courseName: '语言学', courseHour:'18天',autograph:'探索语言的奥秘',empId:3,t_id:2},
      {courseId: 10, courseName: '行为学', courseHour:'30天',autograph:'分析信心理之路',empId:3,t_id:2}
    ],
    //登录的员工或者管理员账号
    empId:'',

    statusId:'',

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
  mutations,
  actions
})

export default store
