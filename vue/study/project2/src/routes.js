import Vue from "vue";
import VueRouter from 'vue-router'
import App from "./App";
import Demo1 from "./demo/Demo1";

Vue.use(VueRouter);

export const routes = [
  {path: '/', component: App},
  {path: '/demo1', component: Demo1}
]

const router = new VueRouter({
  routes
})
export default router

