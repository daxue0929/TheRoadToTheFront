<template>
	<div class="login">
		<Header title="请登录"></Header>
		<el-row :gutter="20">
			<!--<el-col :span="5">-->
				<!--<div class="bg-purple">-->
					<!--占位-->
				<!--</div>-->
			<!--</el-col>-->
			<el-col :span="20" :offset="2">
				<div class="bg-purple mid">
					<el-row>
						<el-col :span="12" :offset="6">
							<el-form :label-position="labelPosition" label-width="100px" :model="form">
								<el-form-item label="员工工号">
									<el-input v-model="form.courseId"></el-input>
								</el-form-item>
								<el-form-item label="员工密码">
									<el-input v-model="form.passWord"></el-input>
								</el-form-item>
								<el-form-item label="请选择公司">
									<el-select v-model="form.company" placeholder="请选择公司">
										<el-option label="A公司" value="shanghai"></el-option>
										<el-option label="B公司" value="beijing"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" @click="submitForm">登录</el-button>
									<el-button @click="resetForm">重置</el-button>
								</el-form-item>
							</el-form>
						</el-col>
					</el-row>
				</div>
			</el-col>
			<el-col :span="5">
				<!--占位-->
			</el-col>
		</el-row>
	</div>
</template>

<script>
  /**
	 * /login
	 *
   */

  import Header from "../../components/Header";
  import { SET_EMP_ID } from "../../store/mutation-types";
  export default {
    name: "Login",
    components: {Header},
    data() {
      return {
        labelPosition: 'left',
        form: {
          courseId: '',
          passWord: '',
          company: ''
        }
			}
		},
		methods: {
      submitForm() {

        //登录服务,登录成功跳转到员工主页面
				//登录失败,就提示重新登录
				this.$router.push({
					path: "/index"
				})
				this.$store.commit({
					type: SET_EMP_ID,
					value: this.form.courseId
				})
      },
      resetForm() {
        this.form = {
          courseId: '',
          passWord: '',
          company: ''
				}
      }
		}
  }
</script>

<style lang="scss" scoped>
	.bg-purple {
		/*background: #d3dce6;*/
		background-image: url("../../assets/body-bg.jpg");
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.mid {
		height: 500px;
		.el-col {
			margin-top: 100px;
			.el-form-item{
				.el-select{
					width: 100%;
				}
				.el-button{
					margin-top: 40px;
					margin-left: 50px;
					position: relative;
					left: -70px;
				}
			}
		}
	}


</style>
