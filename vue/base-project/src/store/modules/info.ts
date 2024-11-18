import {defineStore} from 'pinia'

const useInfoStore = defineStore("info", {
    state: () => {
        return {
            count: 0,
        }
    },
    getters: {},
    actions: {
        updateCount() {
            this.count = this.count + 1
        },

    }
})

export default useInfoStore;