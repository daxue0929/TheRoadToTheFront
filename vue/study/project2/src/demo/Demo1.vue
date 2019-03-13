<template>
	<div>
		<p>这是Demo1</p>
		<button @click="showMe">方法</button>
		{{this.$store.state}}
	</div>

</template>

<script>
  import { SHOW_ME } from "../store/mutation-types";
  export default {
    name: "Demo1",
    data: function () {
      return {
        id: this.$user.id,
        name: this.$user.name,

        people: this.$store.people
      }
    },
    methods: {
			showMe() {
        window.console.log(this.$store.state.Login);
        // this.$store.state.Login.qq.id
				let a = this.$store.dispatch({
					type: SHOW_ME
				})

      }
    },
    components: {}
  }
</script>

<style scoped>

</style>
