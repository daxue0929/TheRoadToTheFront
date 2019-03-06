<template>
	<div>
		<p>{{this.$store.state}}</p>
		<button @click="handleAdd">按钮</button>
	</div>
</template>

<script>
  export default {
    name: "Index",
		methods: {
      handleAdd: function () {
				this.$store.commit({
					type:'showPeople',
					value: 'daxue'
				});
      }
		},
		created() {
      console.log(this)
    }
  }
</script>

<style scoped>

</style>
