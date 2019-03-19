<template>
	<div class="admin-div">
		<el-row>
			<Header :title="companyTitle"></Header>
		</el-row>

		<el-row id="aside">
			<el-col :span="20" :offset="2">
				<el-row>
					<el-col :span="5" class="aside-right">
						<el-collapse v-model="activeNames" @change="handleAsideChange">
							<el-collapse-item title="员工管理中心" name="员工管理中心">
								<p class="aside-right-item" @click="empBasicAllInfo">员工全部信息</p>
							</el-collapse-item>
							<el-collapse-item title="教员管理中心" name="教员管理中心">
								<p class="aside-right-item" @click="">教员全部信息</p>
							</el-collapse-item>
							<el-collapse-item title="课程管理中心" name="课程管理中心">
								<p class="aside-right-item" @click="">课程全部信息</p>
								<p class="aside-right-item" @click="">员工课程管理</p>
								<p class="aside-right-item" @click="">教员授课管理</p>
							</el-collapse-item>
							<el-collapse-item title="评价管理中心" name="评价管理中心">
								<p class="aside-right-item" @click="">全部评价管理</p>
								<p class="aside-right-item" @click="">员工评价管理</p>
								<p class="aside-right-item" @click="">课程评价管理</p>
								<p class="aside-right-item" @click="">教员评价管理</p>
							</el-collapse-item>
						</el-collapse>
					</el-col>
					<el-col :span="19" class="context-left">
						<router-view></router-view>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
  import Header from "../../components/Header";

  export default {
    name: "Admin",
		data() {
      return {
        companyTitle: '一汽大众',  //员工登录的时候选择的公司
        activeNames:[],

			}
		},
		methods:{
      empBasicAllInfo() {
        //查询全部员工的信息
			},

      handleAsideChange(val) {
        window.console.log(val);
      }
		},
		components: {
      Header
		}
  }
</script>

<style scoped>

</style>
