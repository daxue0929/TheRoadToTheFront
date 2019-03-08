<template>
	<div class="index">
		<el-row>
			<Header :title="companyTitle"></Header>
		</el-row>
		<!--header end-->
		<br>
		<el-row>
			<el-col :span="20" :offset="2">
				<el-row>
					<el-col :span="5" style="background: red;">
						<el-collapse v-model="activeNames" @change="handleAsideChange">
							<el-collapse-item title="个人中心" name="个人中心">
								<div>与现实生活一致：与现实生活的语言和概念；</div>
								<div>在界面中一致：所有的文本、元素的位置等。</div>
							</el-collapse-item>
							<el-collapse-item title="培训中心" name="培训中心">
								<div>与现实生活一致：与现实生活的语言和概念；</div>
								<div>在界面中一致：所有的文本、元素的位置等。</div>
							</el-collapse-item>
							<el-collapse-item title="课程中心" name="课程中心">
								<div>与现实生活一致：与现实生活的语言和概念；</div>
								<div>在界面中一致：所有的文本、元素的位置等。</div>
							</el-collapse-item>
							<el-collapse-item title="评价中心" name="评价中心">
								<div>与现实生活一致：与现实生活的语言和概念；</div>
								<div>在界面中一致：所有的文本、元素的位置等。</div>
							</el-collapse-item>
						</el-collapse>

						<div>本系统有三方人员可以登录分别为超级系统管理员,企业管理用户,企业员工用户</div>
						<div></div>
					</el-col>
					<el-col :span="19">
						<div>
							<p>员工可以操作的</p>
							<p>对自己一部分信息的修改,完善自己的信息,查看自己的信息,员工可以离职注销本系统,需要申请,在管理员同意的情况下注销本系统</p>
							<p>员工可以看到,能报名哪些课程.并且能看到其他的人对课程的评价.以及在未报名状态在能看到的课程信息p</p>
							<p>员工能查看教师的信息,了解培训课程培训老师的信息.</p>
							<p>员工能查看自己学过哪些课程,以及自己学习课程的状态,是否已完成,还是正在培训中</p>
							<p>员工能查看自己课程培训的成绩,员工能点击报名一些课程,这个课程就会添加到员工的正在学习课程列表</p>
							<p>员工报名之后,可以查看当前班级里有哪些同学.已毕业的有哪些前辈.</p>
							<p>员工可以在线申请请假,由企业管理用户批准后方可不参加课程培训</p>
						</div>
						<br>
						<div>
							<p>你好</p>
						</div>
					</el-col>
				</el-row>
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
        companyTitle:"示例***	公司",
        activeNames: []
			}
		},
		methods: {
      handleAsideChange(val) {
        console.log(val);
      }
		},
    components: {Header}
  }
</script>

<style lang="scss" scoped>
		.el-col {
			min-height: 550px;
			background: #ACC8CB;
			.el-collapse-item__header {
				background: #EBEEF5;
			}
		}
</style>


<!--
	不同的员工会登陆到不同的员工管理系统
 员工登录成功之后,跳转到本页面.回显员工基本信息.以及系统培训课程的相关信息.
 这个页面是员工操作的主页面

 -->
