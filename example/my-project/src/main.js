import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
// import {router, RouterMount} from './router'

Vue.config.productionTip = false

App.mpType = 'app'

// Vue.use(router)

const app = new Vue({
  ...App
})
//#ifdef H5
// RouterMount(app, router, "#app");
//#endif

//#ifndef H5
app.$mount();
//#endif
