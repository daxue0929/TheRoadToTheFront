<template>
	<div>
		<div class="header">
			<div class="header-top">
				<img class="header-top-img" src="../../../assets/lingling.png">
				<p class="header-top-p">欢迎访问Home页面</p>
			</div>
			<div class="header-introduction">
				<!-- 一个小简介 -->
				<div>登录人员：{{emp.empName}}</div>
				<div>所在公司：{{emp.empCompanyName}}</div>
				<div>登录时间：{{loginTime}}</div>
			</div>
		</div>

		<div class="section">
			<div class="section-title">主页详情信息</div>
			<div class="section-mid">
				<div class="section-mid-col">
					<span>员工编号：{{emp.empId}}</span>
					<span>员工姓名：{{emp.empName}}</span>
				</div>
				<div class="section-mid-col">
					<span>员工国籍：{{emp.empNationality}}</span>
					<span>员工民族：{{emp.empNation}}</span>
				</div>
				<div class="section-mid-col">
					<span>员工部门：{{emp.empMaritalStatus}}</span>
					<span>工作状态：{{emp.empMaritalStatus}}</span>
					<span>工作年限：{{emp.empMaritalStatus}}</span>
				</div>
				<div class="section-mid-col">
					<span>员工身份证件编号：{{emp.empIdNumber}}</span>
				</div>
				<div class="section-mid-col">
					<!-- 籍贯信息 -->
					<span>员工籍贯信息：{{emp.empNativePlace}}</span>
				</div>
				<div class="section-mid-col">
					<span>本人联系方式：{{emp.empPhoneNumber}}</span>
				</div>



			</div>
			<div class="section-footer">
				<div class="section-footer-item">刷新信息</div>
				<div class="section-footer-item">完善信息</div>
				<div class="section-footer-item">退出登录</div>
			</div>
		</div>

		<div class="footer">

		</div>
	</div>
</template>

<script>

  export default {
    name: "FrontBasicPage",
		data() {
      return {
				emp: {
				  empName:'张三',
          empCompanyName:'微软科技',
          empId:'001',

          empSex:'男',
          empNativePlace:'华夏国北京市朝阳区一号街道1101号',
          empNationality: '中国',
          empNation: '汉族',
          empMaritalStatus: '未婚',
          empWorkYear: '10年',
          empStatus: '就职',
          empHomeAddress: '员工宿舍一号',
          empPhoneNumber: '17856093817',
					empIdNumber: '1890679658418022819'
				},
			}
		},
		computed: {
			loginTime: function () {
			  let d = new Date();
				return d.getFullYear()+"-"+ d.getMonth()+"-"+d.getDay()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      },
		},
		watch: {

		},
		methods: {
			test() {
			  return 0
			}
		},
		props: {

		}
  }
</script>

<style scoped lang="scss">
.header{
	height: 5rem;
	width: 100%;
	/*background: #FDEADF;*/
}
.header > .header-top{
	/*background: #F5F3EB;*/
	height: 30px;
}
.header-top-img{
	display: inline-block;
	margin-left: 1rem;
	width: 2.6rem;

}
.header-top-p{
	display: inline-block;
	position: relative;
	top: -.7rem;
	margin-left: 1rem;
	font-size: 1.8rem;
	color: #CB4D40;
	/*background: #BFCB85;*/
}
.header-introduction{
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	font-size: 1.4rem;
	color: #98382E;
}

.section{
	height: 20rem;
	width: 100%;
	/*background: #CBBA90;*/
}
.section-title{
	padding-top: .5rem;
	padding-left: 1rem;
	padding-bottom: .5rem;
	font-size: 1.8rem;
	font-weight: 700;
	color:#CB4D40;

	/*background: #9F67CB;*/
}
.section-mid {
	/*background: #9484CB;*/
}
.section-mid-col{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 3rem;
}
.section-mid-col > span{
	width: 40%;
	margin-bottom: .5rem;
	padding-top: 1rem;
	padding-left: 4rem;
	font-size: 1.6rem;
	/*background: #5A64CB;*/

}
.section-footer{
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.section-footer-item{
	font-size: 1.8rem;
	padding: 1rem;
	color: #5953CB;
}
.section-footer-item:hover{
	border-radius: .5rem;
	background: #fff;
	color: #CB1112;
}
</style>
