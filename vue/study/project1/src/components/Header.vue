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
		height: 70px;
		background: #ACC8CB;
		p {
			font-size: 20px;
			font-weight: 700;
			color: #000;
			/*line-height: 100%;*/
			margin-top: 20px;
		}
	}
</style>
