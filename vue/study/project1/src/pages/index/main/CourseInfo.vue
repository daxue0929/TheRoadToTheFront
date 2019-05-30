<template>
	<div>
		<WelcomeTitle name="课程信息"></WelcomeTitle>
		<div class="course-item" v-for="teacher in t">
			<div><span class="label-title">课程名称：</span>{{teacher.empName}}</div>
			<div><span class="label-title">授课老师：</span>{{teacher.tStartTime}}</div>
			<div><span class="label-title">课程学时：</span>{{teacher.tEducation}}</div>
			<div><span class="label-title">课程类型：</span>{{teacher.autograph}}</div>
		</div>

	</div>
</template>

<script>
  import WelcomeTitle from "../../../components/WelcomeTitle";

  export default {
    name: "CourseInfo",
		data() {
      return {
        t: [
          {
            empName: '历史之路',
            tStartTime: '1988-09-21',
            tEducation: '教授',
            autograph: '每天进步一点点，蓦然回首，已经前进了一大步'
          },
          {
            empName: '文艺复兴',
            tStartTime: '2015-5-4',
            tEducation: '博士',
            autograph: '每天进步一点点，蓦然回首，已经前进了一大步'
          }
				]
			}
		},
    components: {WelcomeTitle}
  }
</script>

<style scoped>
	.course-item{
		background: #FEFEFF;
		height: 2.5rem;
		/*width: 100%;*/
		margin-bottom: 1rem;
		padding-top: .5rem;
		padding-left: .3rem;
		border-bottom: .2rem solid #5CCBC8;
		box-shadow: 0 0 .5rem #5CCBC8 inset;
		display: flex;
		flex-direction: row;
		justify-content: space-around;

	}
	.course-item>div {
		/*padding: 1rem;*/
		font-size: 1.4rem;
		/*background: #616CCB;*/

		line-height: 2rem;
		position: relative;
		top: 0.25rem;
	}
	.label-title{
		color: #838EB5;
	}
</style>
