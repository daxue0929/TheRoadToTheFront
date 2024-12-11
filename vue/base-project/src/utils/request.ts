import axios from 'axios'
import type { AxiosResponse } from 'axios';
import  nProgress from 'nprogress'
import { ElMessage } from 'element-plus'

export interface HttpResponse<T = any> {
    message: string;
    code: string | number;
    data: T;
}

const request = axios.create({
    baseURL: import.meta.env.MODE === "development"? "/dev-api" : "/prod-api",
    timeout: 1000,
    headers: {}
});

// 请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    nProgress.start();
    //todo... 参考若依的话, 这里是不是可以再做一层封装, 统一连接query参数, body转为json之类的
    config.headers["Content-Type"] = "application/json"
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(function (response: AxiosResponse<HttpResponse>) {
    nProgress.done()
    console.log("ceshi", response.data)
    const { code, message, data } = response.data
    if (code === 20000) {
        return data;
    } else {
        ElMessage.error(message)
        return Promise.reject(new Error(message))
    }
}, function (error) {
    let message = ''
    const status = error.response?.status
    switch (status) {
        case 401:
            message = 'token 失效，请重新登录'
            break;
        case 403:
            message = '拒绝访问'
            break;
        case 404:
            message = '请求地址错误'
            break;
        case 500:
            message = '服务器故障'
            break;
        default:
            message = '网络连接故障'
    }
    ElMessage.error(message)
    return Promise.reject(error);
});

export default request