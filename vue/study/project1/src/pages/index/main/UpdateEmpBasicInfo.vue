<template>
	<div>
		<!--<div id="header">-->
			<!--员工基本信息管理-->
			<!--加一条信息-->
		<!--</div>-->
		<!--<el-table-->
			<!--:data="tableData"-->
			<!--height="510"-->
			<!--border-->
			<!--style="width: 100%">-->
			<!--<el-table-column-->
				<!--fixed-->
				<!--prop="date"-->
				<!--label="日期"-->
				<!--width="150">-->
			<!--</el-table-column>-->
			<!--<el-table-column-->
				<!--prop="name"-->
				<!--label="姓名"-->
				<!--width="120">-->
			<!--</el-table-column>-->
			<!--<el-table-column-->
				<!--prop="province"-->
				<!--label="省份"-->
				<!--width="120">-->
			<!--</el-table-column>-->
			<!--<el-table-column-->
				<!--prop="city"-->
				<!--label="市区"-->
				<!--width="120">-->
			<!--</el-table-column>-->
			<!--<el-table-column-->
				<!--prop="address"-->
				<!--label="地址"-->
				<!--width="300">-->
			<!--</el-table-column>-->
			<!--<el-table-column-->
				<!--prop="zip"-->
				<!--label="邮编"-->
				<!--width="120">-->
			<!--</el-table-column>-->
			<!--<el-table-column-->
				<!--fixed="right"-->
				<!--label="操作"-->
				<!--width="100">-->
				<!--<template slot-scope="scope">-->
					<!--<el-button @click="handleSearch(scope.row)" type="text" size="small">编辑</el-button>-->
					<!--<el-button type="text" size="small" @click="handleUpdate(score.row)">删除</el-button>-->
				<!--</template>-->
			<!--</el-table-column>-->
		<!--</el-table>-->
		<form class="emp-form">
			<span class="label">员工工号</span>
			<input type="text" :value="emp.empId"><br>
				<span class="label">员工姓名</span>
			<input type="text" :value="emp.empName"><br>
			<span class="label">公司名称</span>
			<input type="text" :value="emp.empCompanyName"><br>
			<span class="label">性别</span>
			<input type="text" :value="emp.empSex"><br>
			<span class="label">户籍所在地</span>
			<input type="text" :value="emp.empNativePlace"><br>

			<span class="label">国籍</span>
			<input type="text" :value="emp.empNationality"><br>
			<span class="label">民族</span>
			<input type="text" :value="emp.empNation"><br>
			<span class="label">婚姻状况</span>
			<input type="text" :value="emp.empMaritalStatus"><br>
			<span class="label">工龄</span>
			<input type="text" :value="emp.empWorkYear"><br>
			<span class="label">状态</span>
			<input type="text" :value="emp.empStatus"><br>
			<span class="label">现居住址</span>
			<input type="text" :value="emp.empHomeAddress"><br>
			<span class="label">联系手机</span>
			<input type="text" :value="emp.empPhoneNumber"><br>

			<button class="btn-update" @click="handleUpdate">更新</button>
		</form>
	</div>
</template>

<script>
  import { GET_EMP_ALL_INFO, GET_EMP_BYID } from "../../../store/mutation-types";

  export default {
    name: "UpdateEmpBasicInfo",

    data() {
      return {
        emp: {
          empName:'王二狗',
          empId:'001',
          empCompanyName:'公司A',
          empSex:'男',
          empNativePlace:'北京市朝阳区一号',
          empNationality: '中国',
					empNation: '汉族',
          empMaritalStatus: '未婚',
					empWorkYear: '10年',
          empStatus: '就职',
					empHomeAddress: '员工宿舍一号',
					empPhoneNumber: '17856093817'

        },
				// emp: this.$store.state.objEmp,
      }
    },
    methods: {
      handleUpdate() {
				window.console.log(this.emp)
			}
    },
		mounted() {
			this.$store.dispatch({
				type: GET_EMP_BYID,
				value: this.$store.state.empId
			})
    }
  }
</script>

<style scoped lang="scss">
	.label{
		display: inline-block;
		width: 100px;
		height: 30px;
		line-height: 1;
		text-align: right;
	}
	.emp-form {
		margin-top: 30px;
		margin-left: 100px;
		input {
			margin-left: 20px;
			height: 20px;
			width: 200px;
		}
		.btn-update {
			position: relative;
			left: 130px;
			top: 30px;
			width: 60px;
			height: 30px;
			background: #A9CBBC;
			text-shadow: #F1F7F8;
			border: 1px solid #282c34;
		}
	}
	#header{
		width: 100%;
		margin: 0px auto;
		height: 40px;
		background: #fff;
		border-bottom: 1px solid #eee;
		box-shadow: #4e4e4e 0px 1px;
	}
</style>
