<template>
	<!--<div class="teacher-all-info">-->
		<!--管理全部的教员-->
	<!--</div>-->

	<div class="admin-emp-center">
		<div class="header-search">
			<button class="addBtn" @click="addEmpItem">添加教员</button>
		</div>
		<div class="emp-all-table">
			<el-table :data="teacherAllData" height="650" style="width: 100%">
				<el-table-column prop="tId" label="教员编号"></el-table-column>
				<el-table-column prop="tName" label="教员姓名"></el-table-column>
				<el-table-column prop="tTime" label="执教时间"></el-table-column>
				<el-table-column prop="autograph" label="个人签名"></el-table-column>
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
    name: "TeacherAllInfo",
		data() {
      return {
        teacherAllData: [
          {tId: 12, tName: '李国', tTime: '2017-02-23', autograph: '快乐幸福多一点'},
          {tId: 12, tName: '张民', tTime: '2017-02-23', autograph: '快乐幸福多一点'},
          {tId: 12, tName: '赵耀', tTime: '2017-02-23', autograph: '快乐幸福多一点'},
          {tId: 12, tName: '刘海', tTime: '2017-02-23', autograph: '快乐幸福多一点'},
          {tId: 12, tName: '田园', tTime: '2017-02-23', autograph: '快乐幸福多一点'}
        ],


      }
		}
  }
</script>

<style scoped>

</style>
