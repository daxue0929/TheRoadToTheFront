import {
    RouterMount,
    createRouter
} from 'uni-simple-router';
import index from '../pages/index/index.vue'

const router = new createRouter({
    platform: process.env.VUE_APP_PLATFORM,
    h5: {
        vueRouterDev: true, //完全使用vue-router开发 默认 false
    },
    routes: [{
        path: '/',
        name: 'home',
        component: index,
        meta: {
            title: '首页'
        },
        children: [{
            path: '/one',
            name: 'one',
            component: () => import('@/pages/index/index.vue'),
        }],
    }]
})

router.beforeEach((to, from, next) =>{
    //路由守卫
})

export {
    router,
    RouterMount
};