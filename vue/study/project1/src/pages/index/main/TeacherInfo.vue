<template>
	<div>
		<WelcomeTitle name="教员信息"></WelcomeTitle>
		<div class="course-item" v-for="teacher in t">
			<div><span class="label-title">教员姓名：</span>{{teacher.empName}}</div>
			<div><span class="label-title">执教时间：</span>{{teacher.tStartTime}}</div>
			<div><span class="label-title">学历层次：</span>{{teacher.tEducation}}</div>
			<div><span class="label-title">勉励签名：</span>{{teacher.autograph}}</div>
		</div>

	</div>
</template>
<script>
  import WelcomeTitle from "../../../components/WelcomeTitle";
  export default {
    name: "TeacherInfo",
    data() {
      return {
        t: [
          {
            empName: '王小二',
            tStartTime: '2018-5-4',
            tEducation: '硕士',
            autograph: '每天进步一点点，蓦然回首，已经前进了一大步'

          }
          , {
            empName: '王光明',
            tStartTime: '2012-11-4',
            tEducation: '硕士',
            autograph: '生命在于运动，运动的生命是健康的保证。开心'
          },
          {
            empName: '王光明',
            tStartTime: '2012-11-4',
            tEducation: '硕士',
            autograph: '声明在于运动，运动的生命是健康的保证。开心'
          },
          {
            empName: '王光明',
            tStartTime: '2012-11-4',
            tEducation: '硕士',
            autograph: '生命在于运动，运动的生命是健康的保证。开心'
          },
          {
            empName: '李晓明',
            tStartTime: '2001-11-4',
            tEducation: '博士',
            autograph: '有所爱，有所期待。每一天都是美好的日子。。'
          },
          {
            empName: '张大明',
            tStartTime: '2008-10-2',
            tEducation: '博士',
            autograph: '今天是个好日历，明天也是好的呀。每天如此。'
          },
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
		border-bottom: .2rem solid #CB979D;
		box-shadow: 0 0 .5rem #CB979D inset;
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
