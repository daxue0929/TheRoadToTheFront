<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<p>{{title}}员工培训管理系统</p>
		</el-col>
	</el-row>
</template>

<script>
  export default {
    name: "Header",

    data() {
      return {
        companyTitle: "无锡乐乎科技集团"
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style lang="scss" scoped>
	.el-col {
		height: 100px;
		/*background: #ACC8CB;*/
		background-image: url("../assets/header-bg.jpg");

		p {
			font-size: 20px;
			font-weight: 700;
			color: #000;
			/*line-height: 100%;*/
			margin-top: 40px;
			text-align: center;
		}
	}
</style>
