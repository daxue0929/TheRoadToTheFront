import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import HelloWorld from "./components/HelloWorld";
import Demo1 from "./demo/Demo1";


Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path: "/demo1", component: Demo1}
  ],
})

//通过原型挂载到Vue实例实例上,
Vue.prototype.$user = {
  id: "001",
  name: "王雪迪"

};

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
