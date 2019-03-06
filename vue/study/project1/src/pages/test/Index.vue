<template>
	<div>
		<p>{{person}}</p>
		<p>{{this.$store.getters.doneTodos}}</p>
		<br>
		<input type="text" placeholder="请输入名字" v-model="person.name">
		<br>
		<button @click="this.showPeople('王迪')">变成王迪</button>

		<HelloWorld msg="hahahah"></HelloWorld>
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld'
	import { SHOW_PEOPLE } from '@/store/mutation-types'
  export default {
    name: "Index",
		computed: {
      person: function () {
				return this.$store.state.person
      }
		},
		props:{

		},
		methods: {
      handleAdd: function () {
				this.$store.commit({
					type: SHOW_PEOPLE,
					value: 'daxue'
				});
      }
		},
		components: {
      HelloWorld
		}
  }
</script>

<style lang="scss" scoped>

</style>
