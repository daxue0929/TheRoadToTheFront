import * as types from './mutation-types'

const mutations = {
  [types.SHOW_ME] () {
    window.console.log(this.$store)
  }
}

export default mutations
