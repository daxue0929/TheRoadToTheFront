<template>
	<div>
		<p>这是Demo1</p>
		<p>根目录为: {{url}}</p>
	</div>

</template>

<script>
  export default {
    name: "Demo1",
		data: function () {
			return {
				id: this.$user.id,
				name: this.$user.name
			}
    },
		methods: {

		},
		components: {

		}
  }
</script>

<style scoped>

</style>
