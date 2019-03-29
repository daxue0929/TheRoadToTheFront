<template>
	<div class="admin-emp-center">
		<div class="header-search">
			<button class="addBtn" @click="addEmpItem">添加员工</button>
		</div>
		<div class="emp-all-table">
			<el-table :data="empAllInfoTableData" height="650" style="width: 100%">
				<el-table-column prop="empId" label="员工编号" :width="itemWidth"></el-table-column>
				<el-table-column prop="empName" label="员工姓名" :width="itemWidth"></el-table-column>
				<el-table-column prop="empSex" label="员工性别" :width="itemWidth"></el-table-column>
				<el-table-column prop="empBirth" label="员工生日" :width="itemWidth"></el-table-column>
				<el-table-column prop="empNation" label="员工民族" :width="itemWidth"></el-table-column>
				<el-table-column prop="empMaritalStatus" label="婚姻状况" :width="itemWidth"></el-table-column>
				<el-table-column prop="empNationality" label="员工国籍" :width="itemWidth"></el-table-column>
				<el-table-column prop="empNativePlace" label="员工籍贯" :width="itemWidth"></el-table-column>
				<el-table-column prop="empIdNumber" label="身份证号" width="130"></el-table-column>
				<el-table-column prop="empStatus" label="员工状态" :width="itemWidth"></el-table-column>
				<el-table-column prop="empWorkYear" label="员工工龄" :width="itemWidth"></el-table-column>
				<el-table-column prop="empHomeAddress" label="现居住地" :width="itemWidth"></el-table-column>
				<el-table-column prop="empPhoneNumber" label="员工电话" :width="itemWidth"></el-table-column>
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
  import { GET_EMP_ALL_INFO } from "../../../store/mutation-types";

  export default {
    name: "EmployeeCenter",
    data() {
      return {
        itemWidth: 70,
        courseAllData: this.$store.state.courseAllData,
        empAllInfoTableData: [
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
          {
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          },
					{
            courseId: 12, tName: '大牛', empSex: '男', empBirth: '1998-3-8',
            empNation: '汉族', empMaritalStatus: '已婚', empNationality: '中国', empNativePlace: '河南籍贯',
            empIdNumber: '4127126199678928', empStatus: '离职', empWorkYear: '10年', empHomeAddress: '宿舍1号',
            empPhoneNumber: '17546827098'
          }
        ]
      }
    },

		created() {
      this.$store.dispatch({
				type: GET_EMP_ALL_INFO
			})
		},

		methods: {
      updateEmpMsg(e){
        window.console.log(e)
			},
      deleteEmpMsg(e) {
        window.console.log(e)
			},
      addEmpItem() {
        //加入一个员工
				this.$router.push({
					path:'/admin/AddEmpItem'
				})
			}
		}
  }
</script>

<style lang="scss">
	.admin-emp-center {
		.header-search {
			width: 100%;
			height: 50px;
			background: #AFCBC3;
			display: flex;
			flex-direction: row;   //决定主轴方向,默认row 从左到右
			flex-wrap: nowrap;   //不换行
			justify-content: flex-end;
			align-items: stretch;   //如果项目未设置高度或设为auto，将占满整个容器的高度。
			.addBtn{
				width: 106px;
				border-radius: 10px;
			}
		}
		.emp-all-table {
			.el-table {
				td {
					padding: 0px;
					font-size: 12px;
				}
				.cell {
					padding-left: 4px;
				}
			}
		}
	}
</style>
