<template>
	<div class="admin-div">
		<el-row>
			<Header :title="companyTitle"></Header>
		</el-row>

		<el-row id="aside">
			<el-col :span="20" :offset="2">
				<el-row>
					<el-col :span="5" class="aside-right">
						<el-collapse v-model="activeNames" @change="handleAsideChange">
							<el-collapse-item title="员工管理中心" name="员工管理中心">
								<p class="aside-right-item" @click="empBasicAllInfo">员工全部信息</p>
							</el-collapse-item>
							<el-collapse-item title="教员管理中心" name="教员管理中心">
								<p class="aside-right-item" @click="teacherAllInfo">教员全部信息</p>
							</el-collapse-item>
							<el-collapse-item title="课程管理中心" name="课程管理中心">
								<p class="aside-right-item" @click="courseAllInfo">课程全部信息</p>
								<p class="aside-right-item" @click="empCourseInfo">员工课程管理</p>
								<p class="aside-right-item" @click="teacherCourseInfo">教员授课管理</p>
							</el-collapse-item>
							<el-collapse-item title="评价管理中心" name="评价管理中心">
								<p class="aside-right-item" @click="evaluateAllInfo">全部评价管理</p>
								<p class="aside-right-item" @click="evaluateEmpInfo">员工评价管理</p>
								<p class="aside-right-item" @click="evaluateCourseInfo">课程评价管理</p>
								<p class="aside-right-item" @click="evaluateTeacherInfo">教员评价管理</p>
							</el-collapse-item>
						</el-collapse>
					</el-col>
					<el-col :span="19" class="context-left">
						<router-view></router-view>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
  import Header from "../../components/Header";
	import './base.scss'
  export default {
    name: "Admin",
		data() {
      return {
        companyTitle: this.$store.state.companyTitle,  //员工登录的时候选择的公司
        activeNames:[],
			}
		},
		methods:{
      empBasicAllInfo() {
        //查询全部员工的信息
				this.$router.push({
					path:'/admin/EmpBasicAllInfo'
				})
			},
      teacherAllInfo() {
        //管理全部的教员
        this.$router.push({
          path:'/admin/TeacherAllInfo'
        })
			},
      courseAllInfo(){
        //管理课程的全部信息
        this.$router.push({
          path:'/admin/CourseAllInfo'
        })
			},
      empCourseInfo() {
        //员工课程管理,输入员工号,可以查询到该员工,然后修改信息.或者删除该员工的课程信息
        this.$router.push({
          path:'/admin/EmpCourseInfo'
        })
			},
      teacherCourseInfo(){
        //输入教员id,然后查询教员所教授的课程有哪些,然后管理
        this.$router.push({
          path:'/admin/TeacherCourseInfo'
        })
			},
      evaluateAllInfo() {
        // 查询显示评价列表中所有的信息
        this.$router.push({
          path:'/admin/EvaluateAllInfo'
        })
			},
      evaluateEmpInfo() {
        //某一个员工发表的评价
        this.$router.push({
          path:'/admin/EvaluateEmpInfo'
        })
			},
      evaluateCourseInfo() {
        //某一个课程的全部评价
        this.$router.push({
          path:'/admin/EvaluateCourseInfo'
        })
			},
      evaluateTeacherInfo() {
        //某一个教员收到多少的评价
        this.$router.push({
          path:'/admin/EvaluateTeacherInfo'
        })
			},

      handleAsideChange(val) {
        window.console.log(val);
      }
		},
		components: {
      Header
		}
  }
</script>

<style scoped>

</style>
