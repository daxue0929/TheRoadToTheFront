<template>
	<div>
		<!--<div class="eva-item">-->
			<!--<div class="left">-->
				<!--<span class="c_name">物理学发展史</span>-->
				<!--<span class="t_name">王三教员</span>-->
			<!--</div>-->
			<!--<div class="mid">评价信息</div>-->
			<!--<div class="right">-->
				<!--<span class="eva-person">评价人</span>-->
				<!--<span class="eva-time">2018-12-13</span>-->
			<!--</div>-->
		<!--</div>-->
		<!--<div class="eva-item">-->
			<!--<div class="left">-->
				<!--<span class="c_name">物理学发展史</span>-->
				<!--<span class="t_name">王三教员</span>-->
			<!--</div>-->
			<!--<div class="mid">物理学学发展史这门课生动形象的讲解了物理学的原理和物理学的历史，听了这门课-->
			<!--之后，我感觉刷新了世界观观念</div>-->
			<!--<div class="right">-->
				<!--<span class="eva-person">评价人</span>-->
				<!--<span class="eva-time">2018-12-13</span>-->
			<!--</div>-->
		<!--</div>-->
		教师评价信息表
		<EvaluateItem v-for="evaluateItem in evaluateList"
									:courseName="evaluateItem.courseName"
									:teacherName="evaluateItem.courseScore"
									:value="evaluateItem.value"
									:evaluatePeople="evaluateItem.evaluatePeople"
									:evaluateTime="evaluateItem.evaluateTime"
		></EvaluateItem>

	</div>
</template>

<script>

  import EvaluateItem from "../../../components/EvaluateItem";
  export default {
    name: "TeacherEvaluateInfo",
		data() {
      return {
        evaluateList: [
          {
            courseName: '数学发展史',
						courseScore: '大雪老师',
            value: '物理学学发展史这门学的历史，听了这门课之爱你爱你爱你爱你爱爱你爱你',
            evaluatePeople: '张一员工',
						evaluateTime: '2018-12-11'
          },
          {
            courseName: '数学发展史',
						courseScore: '大雪老师',
            value: '物理学学发展史这门学的历史，听了这门课之爱你爱你爱你爱你爱爱你爱你',
						evaluatePeople: '张一员工',
						evaluateTime: '2018-12-11'
          },
          {
            courseName: '数学发展史',
            courseScore: '大雪老师',
            value: '物理学学发展史这门学的历史，听了这门课之爱你爱你爱你爱你爱爱你爱你物理学学发展史这门学的历史，' +
							'听了这门课之爱你爱你爱你爱你爱爱你爱你物理学学发展史这门学的历史，听了这门课之爱你爱这门学的历史，' +
							'听了这门课之爱你爱你爱你爱你爱爱你爱你物理学你爱你爱你爱爱你爱你',
            evaluatePeople: '张一员工',
            evaluateTime: '2018-12-11'
          }

        ]

      }
		},
    components: {EvaluateItem}
  }
</script>

<style scoped lang="scss">
	/*.eva-item{*/
		/*margin-bottom: 20px;*/
		/*display: flex;*/
		/*flex-direction: row;*/
		/*flex-wrap: nowrap;*/
		/*justify-content: space-between;*/
		/*align-items: stretch;*/
		/*!*background: #C2CBBE;*!*/
		/*height: 80px;*/
		/*.left{*/
			/*padding-top: 25px;*/
			/*width: 15%;*/
			/*box-shadow: 0 0 3px #EA7F84 inset;*/
			/*.c_name{*/
				/*display: block;*/
				/*font-size: 18px;*/
				/*color: red;*/
				/*text-align: center;*/

			/*}*/
			/*.t_name{*/
				/*display: block;*/
				/*margin-top: 20px;*/
				/*font-size: 12px;*/
				/*text-align: center;*/
			/*}*/
		/*}*/
		/*.mid{*/
			/*padding: 10px;*/
			/*width: 70%;*/
			/*box-shadow: 0 0 5px #996DCB inset;*/
			/*border-radius: 5px;*/
			/*line-height: 20px;*/
			/*overflow: scroll;*/

			/*!*background: #B3A6CB;*!*/
		/*}*/
		/*.right{*/
			/*padding-top: 20px;*/
			/*width: 10%;*/
			/*box-shadow: 0 0 3px #EA7F84 inset;*/
			/*border-radius: 20px;*/
			/*!*background: #CBACB6;*!*/
			/*.eva-person{*/
				/*display: block;*/
				/*text-align: center;*/

			/*}*/
			/*.eva-time{*/
				/*display: block;*/
				/*text-align: center;*/
				/*margin-top: 20px;*/
				/*font-size: 12px;*/
			/*}*/
		/*}*/
	/*}*/
</style>
