import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
import 'font-awesome/css/font-awesome.min.css' //引入字体图标

import Cookies from 'js-cookie'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './permission' // permission control

const app = createApp(App)
const store = createPinia();

app.use(ElementPlus, {
    size: Cookies.get('size') as "" | "small" | "default" | "large" || 'default'
})

app.use(router)
app.use(store)

app.mount('#app')
