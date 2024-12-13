import {createResult, Result} from "./common";
import { MockMethod, MockConfig } from 'vite-plugin-mock'

/**
 * 文档
 * https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md
 */

function createUserList() {
    return [
        {
            userId: 1,
            avatar: '../src/assets/image/man.png',   // 头像
            username: 'admin',   // 用户名
            password: '123456',   // 用户密码
            desc: '平台管理员',   //角色
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],   // 按钮权限
            routes: ['home'],   // 路由权限
            token: 'Admin Token',
        },
        {
            userId: 2,
            avatar: '../src/assets/image/man.png',   // 头像
            username: 'system',   // 用户名
            password: '111111',   // 用户密码
            desc: '系统管理员',   //角色
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],   // 按钮权限
            routes: ['home'],   // 路由权限
            token: 'System Token',
        },
    ]
}

// 用户登录假接口
const login = {
    url: '/dev-api/hello/test',    // 请求地址
    method: 'get',
    response: ({query}):Result<object> => {
        // 获取请求体鞋带过来的用户名与密码
        const {username, password} = query;
        console.log(query)

        // 调用获取用户信息的函数，用于判断是否有此用户
        const checkUser = createUserList().find(
            (item) => item.username === username && item.password === password,
        )
        // 返回失败信息
        if (!checkUser) {
            return {code: 201,message: ' 账号或密码不正确 ', data: {}}
        }
        // 返回成功信息
        const {token} = checkUser
        return {code: 20000, message: "", data: {token}}
    },
}

// 获取用户信息假接口
const userinfo = {
    url: '/api/user/info',    // 请求地址
    method: 'get',
    response: (request:any):Result<object> => {
        // 获取请求头携带的 token
        const token = request.headers.token;
        // 查看用户信息是否包含有次token用户
        const checkUser = createUserList().find((item) => item.token === token)
        if (!checkUser) {
            return createResult(201, '获取用户信息失败', {}) //获取用户信息失败
        }
        return createResult(20000, "成功", {checkUser})

    },
}

export default [login, userinfo]