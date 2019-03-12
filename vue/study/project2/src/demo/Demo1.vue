<template>
	<div>
		<p>这是Demo1</p>
		<button @click="showMe">方法</button>
	</div>

</template>

<script>
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
        window.console.log(this.$store.state.people.name);
      }
    },
    components: {}
  }
</script>

<style scoped>

</style>
