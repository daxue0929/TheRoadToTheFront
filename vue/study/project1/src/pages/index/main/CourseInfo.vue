<template>
	<div>
		<WelcomeTitle name="课程信息"></WelcomeTitle>
		<div class="course-item" v-for="teacher in t">
			<div><span class="label-title">课程名称：</span>{{teacher.tName}}</div>
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
            tName: '王小二',
            tStartTime: '2018-5-4',
            tEducation: '硕士',
            autograph: '每天进步一点点，蓦然回首，已经前进了一大步'
          },
          {
            tName: '王小二',
            tStartTime: '2018-5-4',
            tEducation: '硕士',
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
