<template>
	<div>
		<WelcomeTitle name="成绩结果"></WelcomeTitle>
		<div class="mid-item mid-title">
			<span class="item">课程名称</span>
			<span class="item">课程成绩</span>
			<span class="item">授课教员</span>
			<span class="item">教员批语</span>
		</div>
		<div class="mid-item" v-for="item in inTrainingTnfo">
			<span class="item">{{item.courseName}}</span>
			<span class="item">{{item.courseScore}}</span>
			<span class="item">{{item.teacherName}}</span>
			<span class="item">{{item.teacherSpeak}}</span>
		</div>

	</div>
</template>

<script>
  import WelcomeTitle from "../../../components/WelcomeTitle";
  export default {
    name: "TrainingResults",
    components: {WelcomeTitle},
    data() {
      return {
        inTrainingTnfo: [
          {courseName:'物理学发展史',courseScore:'86分', teacherName:'王小明',teacherSpeak:'正在培训'},
          {courseName:'数学发展史',courseScore:'15分', teacherName:'王大明',teacherSpeak:'正在培训'},
          {courseName:'化学发展史',courseScore:'90分', teacherName:'胖虎',teacherSpeak:'正在培训'},
          {courseName:'历史学研究',courseScore:'10分', teacherName:'章二',teacherSpeak:'培训完成'}
        ]
			}
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
		border: .1rem solid #6863CB;
		box-shadow: 0 0 .5rem #6863CB inset;
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

</style>
