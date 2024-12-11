import router from './router'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth'

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
    NProgress.start()

    if (getToken()) {
        // 有token
        if (to.path === '/login') {
            next()
            NProgress.done()
            console.log("getToken /login")
        }else
            if (whiteList.indexOf(to.path) !== -1) {
            console.log("getToken whiteList")
            next()
        }else {
            // todo.. 获取当前用户信息
            // todo.. 根绝用户角色信息, 生成可访问的路由表
            console.log("getToken else")
            // next({ ...to }) // hack方法 确保addRoutes已完, 参考若依
            next()
        }
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            next() // 在免登录白名单，直接进入
        }else {
            next(`/login?redirect=${encodeURIComponent(to.fullPath)}`) // 否则全部重定向到登录页
            NProgress.done()
        }
    }

})

router.afterEach(() => {
    NProgress.done()
})


