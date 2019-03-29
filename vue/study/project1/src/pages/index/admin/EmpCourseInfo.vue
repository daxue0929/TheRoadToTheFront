<template>
	<div class="emp-course-info">
		<div class="header-search">
			<label class="input-label">输入员工工号：</label>
			<input class="search-input" type="number" v-model="searchValue">
			<input class="search-btn" type="button" value="搜索" @click="searchNow" />
		</div>
		<div>
			<span v-if="!searchValue" class="result-title">没有搜索到任何企业员工</span>
		</div>
		<!--员工课程管理,输入员工号,可以查询到该员工,然后修改信息.或者删除该员工的课程信息-->
	</div>
</template>
<script>
  export default {
    name: "EmpCourseInfo",
		data() {
      return {
        searchValue: '',
			}
		},
		methods: {
      searchNow() {
				alert("点击了搜索")
			}
		}
  }
</script>

<style scoped>
	.header-search{
		margin-left: 4rem;
		margin-top: 1rem;
	}
	.input-label {
		font-size: 1.5rem;
		position: relative;
		top: .2rem;
	}
	.search-input {
		border: none;
		border-radius: .1rem;
		width: 15rem;
		height: 2rem;
		margin-left: 2rem;
		padding-left: .5rem;
		font-size: 1.5rem;
	}
	.search-input:focus {
		background: #898A57;
		color: #FFFFFF;
	}
	.search-btn{
		position: relative;
		left: 6rem;
		width: 5rem;
		height: 2.2rem;
	}
	.result-title{
		display: block;
		margin-top: 12rem;
		margin-left: 26rem;
		font-size: 2rem;
		color: #474A4A;
	}
</style>
