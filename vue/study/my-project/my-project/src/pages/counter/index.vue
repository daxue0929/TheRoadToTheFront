<template>
  <div class="counter-warp">
		{{ number }}
    <p>
      <button @click="increment">+</button>
      <!--<button @click="decrement">-</button>-->
    </p>
  </div>
</template>

<script>
// Use Vuex
import store from '../../store/store'

export default {
  computed: {
    number () {
      return store.state.number
    }
  },
  methods: {
    increment: function () {
      store.commit('addNumber')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
