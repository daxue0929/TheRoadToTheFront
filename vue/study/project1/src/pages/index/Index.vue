<template>
	<div class="index">
		<el-row>
			<Header :title="companyTitle"></Header>
		</el-row>
		<!--header end-->
		<br>
		<el-row>
			<el-col :span="20" :offset="2">
				fa
			</el-col>
		</el-row>

	</div>
</template>

<script>
  import Header from "../../components/Header";
  export default {
    name: "Index",
		data() {
      return {
        companyTitle:"示例***	公司"
			}
		},
    components: {Header}
  }
</script>

<style lang="scss" scoped>
		.el-col {
			height: 1000px;
			background: #ACC8CB;
		}
</style>


<!--
	不同的员工会登陆到不同的员工管理系统
 员工登录成功之后,跳转到本页面.回显员工基本信息.以及系统培训课程的相关信息.
 这个页面是员工操作的主页面

 -->
