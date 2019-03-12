import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes
})


//通过原型挂载到Vue实例实例上,
Vue.prototype.$user = {
  id: "001",
  name: "王雪迪"
};


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
