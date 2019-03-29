<template>
<div>
	<WelcomeTitle name="培训状态"></WelcomeTitle>
	<div class="main">
		<div class="mid-item mid-title">
			<span class="item">课程名称</span>
			<span class="item">授课教员</span>
			<span class="item">培训时间</span>
			<span class="item">培训状态</span>
		</div>
		<div class="mid-item" v-for="item in inTrainingTnfo">
			<span class="item">{{item.courseName}}</span>
			<span class="item">{{item.courseScore}}</span>
			<span class="item">{{item.startTime}}</span>
			<span class="item">{{item.trainStatus}}</span>
		</div>
	</div>
</div>
</template>
<script>
  import WelcomeTitle from "../../../components/WelcomeTitle";
  export default {
    name: "InTrainingInfo",
    components: {WelcomeTitle},
    data() {
      return {
        emp: {
          tName:'张三',
          empCompanyName:'微软科技'
        },
        inTrainingTnfo: [
					{courseName:'物理学发展史',courseScore:'张明日', startTime:'2018-06-12',trainStatus:'正在培训'},
          {courseName:'物理学发展史',courseScore:'张明日', startTime:'2018-06-12',trainStatus:'正在培训'},
          {courseName:'物理学发展史',courseScore:'张明日', startTime:'2018-06-12',trainStatus:'正在培训'},
          {courseName:'物理学发展史',courseScore:'张明日', startTime:'2018-06-12',trainStatus:'培训完成'}
        ]
			}
		},
		computed: {
      loginTime: function () {
        let d = new Date();
        return d.getFullYear()+"-"+ d.getMonth()+"-"+d.getDay()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      },
		}
  }
</script>
<style scoped>

	.mid-title{
		font-size: 1.5rem;
		font-weight: bold;
		color: #CB64BC;
	}
	.mid-item {
		height: 3rem;
		border: .1rem solid #93CB81;
		box-shadow: 0 0 .5rem #93CB81 inset;
		border-radius: 1.5rem 0 0 0;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: .5rem;
	}
.mid-item> .item {
	width: 11rem;
	height: 2rem;
	text-align: center;
	padding-top: 1rem;

	/*background: #CB584C;*/
}
.mid-item > .item:first-child {

}
</style>
