<template>
	<div class="regist">
		<Header title="请新员工注册"></Header>

		<el-row :gutter="20">
			<el-col :span="20" :offset="2">
				<div class="bg-purple mid">
					<el-row>
						<el-col :span="8" :offset="8">

							<el-form :label-position="labelPosition" label-width="80px" :model="form" size="mini">
								<el-form-item label="公司名称">
									<el-input v-model="form.empCompanyName"></el-input>
								</el-form-item>
								<el-form-item label="员工工号">
									<el-input v-model="form.courseId"></el-input>
								</el-form-item>
								<el-form-item label="员工姓名">
									<el-input v-model="form.tName"></el-input>
								</el-form-item>
								<el-form-item label="员工密码">
									<el-input v-model="form.passWord"></el-input>
								</el-form-item>
								<el-form-item label="员工性别">
									<el-input v-model="form.empSex"></el-input>
								</el-form-item>
								<el-form-item label="员工住址">
									<el-input v-model="form.empHomeAddress"></el-input>
								</el-form-item>
								<el-form-item label="员工工龄">
									<el-input v-model="form.empWorkYear"></el-input>
								</el-form-item>
								<el-form-item label="联系方式">
									<el-input v-model="form.empPhoneNumber"></el-input>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" @click="submitForm">注册</el-button>
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
	 * /regist
	 *
   */
  import Header from "../../components/Header"
  import { NEW_EMP_REGIST } from '@/store/mutation-types'

  export default {
    name: "regist",
    components: {Header},
    data() {
      return {
        labelPosition: 'left',
        form: {
          empCompanyName:'',
          courseId: '',
          tName: '',
          passWord: '',
					empSex:'',
					empHomeAddress:'',
					empWorkYear:'',
					empPhoneNumber:''

        }
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch({
          type: NEW_EMP_REGIST,
					value: this.form
        })
      },
      resetForm() {
        this.form = {
          courseId: '',
          passWord: '',
          company: ''
        }
      }
    },
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
			margin-top: 50px;

			.el-form-item {
				.el-select {
					width: 500px;
				}

				.el-button {
					margin-top: 20px;
					margin-left: 50px;
					position: relative;
					left: -70px;
				}
			}
		}
	}
</style>
