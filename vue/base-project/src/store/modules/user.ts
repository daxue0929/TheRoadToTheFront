import { defineStore } from "pinia";
import {getToken, setToken} from '@/utils/auth'
import { login } from '@/api/login'

export default defineStore('user', {
    state: () => ({
        token: getToken(),
        id: '',
        name: '',
        avatar: '',
        roles: [],
        permissions: []
    }),
    actions: {
        async Login(userInfo: UserInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid
            return new Promise<void>((resolve, reject) => {
                login({username: username, password: password}).then((res) => {
                    setToken(res.token)
                    this.token = res.token
                    resolve()
                }).catch((error) => {
                    reject(error)
                })
            })
        }
    },
    getters: {}
})


