<template>
	<div class="index">
		<el-row>
			<Header :title="companyTitle"></Header>
		</el-row>
		<!--header end-->
		<br>
		<el-row id="aside">
			<el-col :span="20" :offset="2">
				<el-row>
					<el-col :span="5" class="aside-right">
						<el-collapse v-model="activeNames" @change="handleAsideChange">
							<el-collapse-item title="个人中心" name="个人中心">
								<!--<router-link to="/index/EmpBasicInfo">跳转</router-link>-->
								<p class="aside-right-item" @click="empBasicInfo">员工基本信息</p>
								<p class="aside-right-item" @click="goUpdate">更新信息</p>
							</el-collapse-item>
							<el-collapse-item title="培训中心" name="培训中心">
								<p class="aside-right-item" @click="inTraining">培训进行时</p>
								<p class="aside-right-item" @click="completedCourse">培训已完成</p>
								<p class="aside-right-item" @click="trainingResults">培训成绩表</p>
							</el-collapse-item>
							<el-collapse-item title="课程中心" name="课程中心">
								<p class="aside-right-item" @click="teacherInfo">教员信息</p>
								<p class="aside-right-item" @click="courseInfo">课程信息</p>
							</el-collapse-item>
							<el-collapse-item title="评价中心" name="评价中心">
								<p class="aside-right-item" @click="teacherEvaluateInfo">教员评价信息</p>
								<p class="aside-right-item" @click="courseEvaluateInfo">课程评价信息</p>
							</el-collapse-item>
						</el-collapse>
					</el-col>
					<el-col :span="19" class="context-left">
						<router-view></router-view>
						<!--<div class="context-left-header">-->
							
						<!--</div>-->
						<!--<div class="context-mid">-->
							<!--<p>这是一个组件</p>-->
							<!--<p>对自己一部分信息的修改,完善自己的信息,查看自己的信息,员工可以离职注销本系统,需要申请,在管理员同意的情况下注销本系统</p>-->
							<!--<p>员工可以看到,能报名哪些课程.并且能看到其他的人对课程的评价.以及在未报名状态在能看到的课程信息p</p>-->
							<!--<p>员工能查看教师的信息,了解培训课程培训老师的信息.</p>-->
							<!--<p>员工能查看自己学过哪些课程,以及自己学习课程的状态,是否已完成,还是正在培训中</p>-->
							<!--<p>员工能查看自己课程培训的成绩,员工能点击报名一些课程,这个课程就会添加到员工的正在学习课程列表</p>-->
							<!--<p>员工报名之后,可以查看当前班级里有哪些同学.已毕业的有哪些前辈.</p>-->
							<!--<p>员工可以在线申请请假,由企业管理用户批准后方可不参加课程培训</p>-->
						<!--</div>-->
						<!--<div class=""></div>-->
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
        companyTitle: "示例***	公司",
        activeNames: []
      }
    },
    methods: {
      goUpdate(){
        //跳转到更新信息页面
				this.$router.push({
					path: '/index/update'
				})
			},
      empBasicInfo(){
        // 员工详细信息页面
        this.$router.push({
          path: '/index/EmpBasicInfo'
        })
			},
      inTraining() {
        //正在的培训的课程信息
        this.$router.push({
          path: '/index/InTrainingInfo'
        })
			},
      completedCourse() {
        //完成的培训列表
        this.$router.push({
          path: '/index/CompletedCourse'
        })
			},
      trainingResults() {
        //培训成绩信息
        this.$router.push({
          path: '/index/TrainingResults'
        })
			},
      teacherInfo() {
        //教员信息
        this.$router.push({
					path: '/index/TeacherInfo'
				})
			},
      courseInfo() {
        //课程信息
        this.$router.push({
          path: '/index/CourseInfo'
        })
			},
      teacherEvaluateInfo() {
        //教员评价信息
        this.$router.push({
          path: '/index/TeacherEvaluateInfo'
        })
			},
      courseEvaluateInfo() {
        //课程评价信息
        this.$router.push({
          path: '/index/CourseEvaluateInfo'
        })
			},


      handleAsideChange(val) {
        window.console.log(val);
      }
    },
    components: {Header}

  }
</script>

<style lang="scss">
	#aside {
		.el-col {
			min-height: 550px;
			background: #ACC8CB;
			.aside-right{
				background-color: #C7CBC5;
				.aside-right-item{
					margin-top: 10px;
					font-size: 17px;
					color: #000;
				}
				.aside-right-item:hover{
					color: red;
					text-decoration: underline;
				}
				.el-collapse-item__header {
					background-color: #C7CBC5;
				}
			}
		}
	}

	.context-left{
		.context-left-header{
			height: 50px;
			background: #B4CBB0;
		}
	}
</style>


<!--
	不同的员工会登陆到不同的员工管理系统
 员工登录成功之后,跳转到本页面.回显员工基本信息.以及系统培训课程的相关信息.
 这个页面是员工操作的主页面

 -->
