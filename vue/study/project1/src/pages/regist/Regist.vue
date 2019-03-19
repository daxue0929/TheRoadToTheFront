<template>
	<div class="regist">
		<Header title="请新员工注册"></Header>

		<el-row :gutter="20">
			<el-col :span="14" :offset="5">
				<div class="bg-purple mid">
					<el-row>
						<el-col :span="12" :offset="6">
							<el-form :label-position="labelPosition" label-width="100px" :model="form">
								<el-form-item label="员工工号">
									<el-input v-model="form.empId"></el-input>
								</el-form-item>
								<el-form-item label="员工姓名">
									<el-input v-model="form.empName"></el-input>
								</el-form-item>
								<el-form-item label="员工密码">
									<el-input v-model="form.passWord"></el-input>
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
  import Header from "../../components/Header"
  import { NEW_EMP_REGIST } from '@/store/mutation-types'

  export default {
    name: "regist",
    components: {Header},
    data() {
      return {
        labelPosition: 'left',
        form: {
          empId: '',
          empName: '',
          passWord: ''
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
          empId: '',
          passWord: '',
          company: ''
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
	.bg-purple {
		background: #d3dce6;
	}

	.mid {
		height: 500px;

		.el-col {
			margin-top: 100px;

			.el-form-item {
				.el-select {
					width: 100%;
				}

				.el-button {
					margin-top: 40px;
					margin-left: 50px;
					position: relative;
					left: -70px;
				}
			}
		}
	}
</style>
