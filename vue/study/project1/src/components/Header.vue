<template>
	<el-row >
		<el-col class="header" :span="20" :offset="2">
			<div>

				<p>{{title}}员工培训管理系统</p>
			</div>
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
	.header{
		height: 100px;
		background-image: url("../assets/header-bg.jpg");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		p {
			font-size: 20px;
			font-weight: 700;
			color: #000;
			line-height: 100px;
			text-align: center;
		}
	}
</style>
