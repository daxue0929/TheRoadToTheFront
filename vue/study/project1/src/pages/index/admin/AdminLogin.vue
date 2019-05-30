<template>
	<div class="admin-login">
		<div class="header">
			<p>欢迎管理员登录培训管理系统后台</p>
		</div>
		<div class="body">
						<el-row>
							<el-col :span="12" :offset="6">
								<el-form :label-position="labelPosition" label-width="100px" :model="form">
									<el-form-item label="管理员账号">
										<el-input v-model="form.empId"></el-input>
									</el-form-item>
									<el-form-item label="管理员密码">
										<el-input v-model="form.passWord"></el-input>
									</el-form-item>
									<el-form-item>
										<el-button type="primary" @click="submitForm">登录</el-button>
										<el-button @click="resetForm">重置</el-button>
									</el-form-item>
								</el-form>
							</el-col>
						</el-row>


		</div>
		<div class="footer">


		</div>
	</div>
</template>

<script>
  export default {
    name: "AdminLogin",
		data() {
      return {
        labelPosition: 'left',
        form: {
          empId: '',
          passWord: '',
          company: ''
        }
			}
		},
		methods: {
      submitForm() {

			},
      resetForm() {
        this.form = {
          empId: '',
          passWord: '',
          company: ''
        }
      }

		}
  }


</script>

<style scoped>
	.admin-login {
		width: 100%;
	}
	.header {
		height: 7rem;
		/*background: #CBB3A7;*/
		background-image: url("../../../assets/header-bg.jpg");
	}
	.header > p{
		line-height: 7rem;
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
	}
	.body{
		margin-top: 10rem;
	}
</style>
