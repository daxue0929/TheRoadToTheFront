<template>
	<!--<div class="course-all-info">-->
		<!--查询全部的课程管理-->
	<!--</div>-->
	<div class="admin-emp-center">
		<div class="header-search">
			<button class="addBtn" @click="addCourseItem">添加教员</button>
		</div>
		<div class="emp-all-table">
			<el-table :data="courseAllData" height="650" style="width: 100%">
				<el-table-column prop="courseId" label="课程号"></el-table-column>
				<el-table-column prop="courseName" label="课程名"></el-table-column>
				<el-table-column prop="courseHour" label="课程周期"></el-table-column>
				<el-table-column prop="autograph" label="课程备注"></el-table-column>
				<el-table-column
					fixed="right"
					label="操作"
					width="100">
					<template slot-scope="scope">
						<el-button @click="updateEmpMsg(scope.row)" type="text" size="small">修改</el-button>
						<el-button @click="deleteEmpMsg(scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>

</template>

<script>
  export default {
    name: "CourseAllInfo",
    data() {
      return {
        //课程编号、课程名，课程类型、课程备注
        courseAllData: [
          {
            courseId: 12, courseName: '大牛', courseHour:'2017-02-23',autograph:'快乐幸福多一点'
          }
        ]
      }
    },
		methods: {
      addCourseItem() {
        alert("这需要跳转到添加一个课程的表单")
			}
		}
  }
</script>

<style scoped>

</style>
