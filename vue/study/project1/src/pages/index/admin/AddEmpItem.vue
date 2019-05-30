<template>
	<div>
		<form class="emp-form">
			<span class="label">员工工号：</span>
			<input type="text" :value="emp.empId"><br>
			<span class="label">员工姓名：</span>
			<input type="text" :value="emp.empName"><br>
			<span class="label">公司名称：</span>
			<input type="text" :value="emp.empCompanyName"><br>
			<span class="label">性别：</span>
			<input type="text" :value="emp.empSex"><br>
			<span class="label">户籍所在地：</span>
			<input type="text" :value="emp.empNativePlace"><br>
			<span class="label">国籍：</span>
			<input type="text" :value="emp.empNationality"><br>
			<span class="label">民族：</span>
			<input type="text" :value="emp.empNation"><br>
			<span class="label">身份证号：</span>
			<input type="text" :value="emp.empIdNumber"><br>
			<span class="label">婚姻状况：</span>
			<input type="text" :value="emp.empMaritalStatus"><br>
			<span class="label">工龄：</span>
			<input type="text" :value="emp.empWorkYear"><br>
			<span class="label">状态：</span>
			<input type="text" :value="emp.empStatus"><br>
			<span class="label">现居住址：</span>
			<input type="text" :value="emp.empHomeAddress"><br>
			<span class="label">联系手机：</span>
			<input type="text" :value="emp.empPhoneNumber"><br>
			<button class="btn-update" @click="handleSubmit">提交</button>
		</form>
	</div>
</template>
<script>
  export default {
    name: "AddEmpItem",
		data() {
      return {
        emp: {
          empName:'',
          empId:'',
          empCompanyName:'',
          empSex:'',
          empNativePlace:'',
          empNationality: '',
          empNation: '',
          empMaritalStatus: '',
          empWorkYear: '',
          empStatus: '',
          empHomeAddress: '',
          empPhoneNumber: '',
          empIdNumber:''
        }
			}
		},
		methods: {
      handleSubmit() {
        alert("提交成功，跳转到员工中心")
				this.$router.push({
					path: '/admin/EmpBasicAllInfo'
				})
			}
		}
  }
</script>

<style lang="scss" scoped>
	.emp-form {
		margin-top: 30px;
		/*margin-left: 100px;*/
		.label{
			display: inline-block;
			width: 120px;
			text-align: right;
		}
		input {
			margin-left: 10px;
			height: 20px;
			width: 200px;
			margin-bottom: 10px;
		}

		.btn-update {
			position: relative;
			left: 130px;
			top: 10px;
			width: 60px;
			height: 30px;
			background: #5CCB20;
			text-shadow: #F1F7F8;
			border: 1px solid #282c34;
		}

	}
</style>
