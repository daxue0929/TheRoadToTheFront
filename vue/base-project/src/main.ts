import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css' //引入字体图标

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入svg插件的代码
import 'virtual:svg-icons-register'
import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs'


const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus, {
    locale: zhCn
})

app.mount('#app')
