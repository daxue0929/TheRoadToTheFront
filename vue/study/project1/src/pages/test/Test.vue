<template>
	<div>
		<p>{{person}}</p>
		<p>{{this.$store.getters.doneTodos}}</p>
		<br>
		<input type="text" placeholder="请输入名字" v-model="person.name">
		<RowSpace w="120" />{{this.$store.state.person.name}}
		<br>
		<div>
			<span>改变json.name</span>
			<RowSpace w="120" />
			<button @click="handleBecome">变成daxue</button>
		</div>

		<HelloWorld msg="hahahah"></HelloWorld>
		<br>
		<RowSpace w="170"></RowSpace>
		<br>

		<button @click="handleGetEmpInfo">获取emp员工信息</button>
		<span v-if="this.$store.state.objEmp">{{this.$store.state.objEmp.empBirth}}</span>

	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld'
	import { SHOW_PEOPLE } from '@/store/mutation-types'
  import { GET_EMP_INFO } from '@/store/mutation-types'
	import RowSpace from '@/components/RowSpace'
  export default {
    name: "Test",
		computed: {
      person: function () {
				return this.$store.state.person
      }
		},
		props:{

		},
		mounted: function() {
      this.handleGetEmpInfo();
		},
		methods: {
      handleGetEmpInfo: function() {
        this.$store.dispatch({
					type: GET_EMP_INFO
				})
			},
      handleBecome: function () {
				// this.$store.commit({
				// 	type: SHOW_PEOPLE,
				// 	value: 'daxue'
				// });
				this.$store.dispatch({
					type:SHOW_PEOPLE,
					value:"daxue"
				})
      }
		},
		components: {
      HelloWorld,
      RowSpace
		}
  }
</script>

<style lang="scss" scoped>

</style>
