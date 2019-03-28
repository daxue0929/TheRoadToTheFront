<template>
	<div>
		<p>{{person}}</p>
		<p>{{this.$store.getters.doneTodos}}</p>
		<br>
		<input type="text" placeholder="请输入名字" v-model="person.name">
		<RowSpace w="120"/>
		{{this.$store.state.person.name}}
		<br>
		<div>
			<span>改变json.name</span>
			<RowSpace w="120"/>
			<button @click="handleBecome">变成daxue</button>
		</div>

		<!--<HelloWorld msg="hahahah"></HelloWorld>-->
		<br>
		<RowSpace w="170"></RowSpace>
		<br>

		<button @click="handleGetEmpInfo">测试获取emp员工信息</button>
		<span v-if="this.$store.state.objEmp">{{this.$store.state.objEmp.empBirth}}</span>
		<hr>
		<hr>

		<ul>
			<li v-for="(item, key) in data" :key="key">{{item}}</li>
		</ul>
	</div>
</template>

<script>

  import RowSpace from '../../components/RowSpace'
  import { GET_EMP_BYID, SHOW_PEOPLE } from "../../store/mutation-types";
  // import HelloWorld from "../../../../project2/src/components/HelloWorld";
  import axios from 'axios'

  export default {
    name: "Test",
    data() {
      return {
        data: {}
      }
    },
    computed: {
      person: function () {
        return this.$store.state.person
      }
    },
    props: {},

    mounted: function () {
      // this.handleGetEmpInfo();
      // axios.get('/test/index').then(res => {
      //   this.data = res.data.test
      //   window.console.log(this.data)
      // })
    },
    methods: {
      handleGetEmpInfo: function () {
        this.$store.dispatch({
          type: GET_EMP_BYID,
          value: 1
        })
      },
      handleBecome: function () {
        // this.$store.commit({
        // 	type: SHOW_PEOPLE,
        // 	value: 'daxue'
        // });
        this.$store.dispatch({
          type: SHOW_PEOPLE,
          value: "daxue"
        })
      }
    },
    components: {
      // HelloWorld,
      RowSpace
    }
  }
</script>

<style lang="scss" scoped>

</style>
