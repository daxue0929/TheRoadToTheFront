<template>
	<div class="emp-course-info">
		<div class="header-search">
			<label class="input-label">输入教员编号：</label>
			<input class="search-input" type="number" v-model="searchValue">
			<input class="search-btn" type="button" value="搜索" @click="searchNow" />
		</div>
		<div>
			<span v-if="!searchValue" class="result-title">没有搜索到任何教员</span>
		</div>
		<!--员工课程管理,输入员工号,可以查询到该员工,然后修改信息.或者删除该员工的课程信息-->

		<div class="emp-all-table" ref="table">
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
    name: "EmpCourseInfo",
    data() {
      return {
        courseAllData:this.$store.state.courseArr.filter(item => item.empId == 2),
        searchValue: Number,
        searchValue: '',
      }
    },
    methods: {
      searchNow() {
        this.$refs.table.style.opacity=1
      },
      updateEmpMsg(course){

        window.console.log(course)
        // 写一个表格
      },
      deleteEmpMsg(course){
        window.console.log(course)
        for (let i =0; i < this.courseAllData.length; i++) {
          if (course.courseId === this.courseAllData[i].courseId){
            this.courseAllData.splice(i,1);
          }
        }
      }
    }
  }
</script>

<style scoped>
	.emp-all-table{
		opacity: 0;
	}
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
		background: #A7B0CB;
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
		margin-left: 28rem;
		font-size: 2rem;
		color: #474A4A;
	}
</style>


<!--<template>-->
	<!--<div class="teacher-course-info">-->
		<!--<p>输入教员id,</p>-->
		<!--然后查询教员所教授的课程有哪些,然后管理-->
	<!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--name: "TeacherCourseInfo"-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
