import { MockMethod, MockConfig } from 'vite-plugin-mock'

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
    response: ({query}) => {

        // 获取请求体鞋带过来的用户名与密码
        const {username, password} = query;
        console.log(query)

        // 调用获取用户信息的函数，用于判断是否有此用户
        const checkUser = createUserList().find(
            (item) => item.username === username && item.password === password,
        )

        console.log(checkUser)
        console.log(checkUser)

        // 返回失败信息
        if (!checkUser) {
            return {code: 201, data: {message: ' 账号或密码不正确 '}}
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
    response: (request) => {

        // 获取请求头携带的 token
        const token = request.headers.token;

        // 查看用户信息是否包含有次token用户
        const checkUser = createUserList().find((item) => item.token === token)

        // 返回失败信息
        if (!checkUser) {
            return {code: 201, data: {message: ' 获取用户信息失败 '}}
        }

        // 返回成功信息
        return {code: 20000, message: "", data: {checkUser}}

    },
}

export default [login, userinfo]