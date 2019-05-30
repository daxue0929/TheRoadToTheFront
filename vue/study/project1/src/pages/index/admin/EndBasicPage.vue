<template>
	<div >
		<div class="header">
			<div class="header-top">
				<img class="header-top-img" src="../../../assets/lingling.png">
				<p class="header-top-p">欢迎访问培训管理系统后台页面</p>
			</div>
			<div class="header-introduction">
				<!-- 一个小简介 -->
				<div>登录人员：admin</div>
				<!--<div>所在公司：无</div>-->
				<div>登录时间：{{loginTime}}</div>
			</div>
		</div>
		<div class="section">
			<h3 class="section-title">此页面为后台管理系统指南页</h3>
				<ul class="emp-center">
					<li>浏览员工信息</li>
					<li>删除员工信息</li>
					<li>修改员工信息</li>
					<li>管理员新增一个员工</li>
				</ul>
			<ul class="teacher-center">
				<li>浏览教员信息</li>
				<li>新增一名教员</li>
				<li>删除一名教员</li>
				<li>修改一名教员信息</li>
			</ul>
			<ul class="course-center">
				<li>浏览课程:</li>
				<li>删除课程</li>
				<li>修改课程</li>
				<li>新增一门课程</li>
			</ul>
			<ul class="evaluate-center">
				<li>浏览评价信息</li>
				<li>新增评价信息</li>
				<li>删除评价信息</li>
				<li>新增评价信息</li>
			</ul>

		</div>
	</div>
</template>

<script>
  export default {
    name: "EndBasicPage",
		computed:{
      loginTime: function () {
        let d = new Date();
        return d.getFullYear()+"-"+ d.getMonth()+"-"+d.getDay()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      },
		}
  }
</script>

<style scoped>
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

	.section-title{
		margin-top: 1.5rem;
		text-align: center;
		font-size: 1.5em;
	}
	.emp-center,.teacher-center,.course-center,.evaluate-center{
		margin-left: 3rem;
		font-size: 1.7rem;
		margin-bottom: 1em;
		height: 100px;
		width: 400px;
	}
	.emp-center{
		height: 100px;
	}
	.course-center{
		float: left;
	}
	/*.evaluate-center{*/
		/*position: relative;*/
		/*left: 100px;*/
		/*top: 100px;*/
	/*}*/

</style>
