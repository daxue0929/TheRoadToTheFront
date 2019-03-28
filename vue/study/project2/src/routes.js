import Vue from "vue";
import VueRouter from 'vue-router'
import App from "./App";
import Demo1 from "./demo/Demo1";
import Demo2 from "./demo/Demo2";

Vue.use(VueRouter);

export const routes = [
  {path: '/', name: 'app', component: App},
  {path: '/demo1', name:'demo1', component: Demo1, alias: '简单的接收点击请求一个json数据显示，测试axios'},
  {path: '/demo2/:color', name: 'demo2', component: Demo2}

]

const router = new VueRouter({
  routes
})
export default router

