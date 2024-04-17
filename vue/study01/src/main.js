import './assets/main.css'
// 引入了Vue,并且挂载到#app节点
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import index from "@/views/home/index.vue";
import Test from "@/views/Test.vue";



const routes = [
    {path: '/', component: Test},
    {path: '/test', component: index},
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(router)
// mount函数的参数: 可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
app.mount('#app')
