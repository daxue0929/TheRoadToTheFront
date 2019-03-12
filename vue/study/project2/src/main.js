import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/store'

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
