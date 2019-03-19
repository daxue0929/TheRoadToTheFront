import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'
import App from './App.vue'
import { routes } from './routes'
import './assets/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
