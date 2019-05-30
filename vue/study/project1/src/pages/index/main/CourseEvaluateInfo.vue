<template>
	<div>
		<div class="evaluate-content">


		</div>
		<EvaluateItem v-for="evaluateItem in evaluateList"
									:name="evaluateItem.name"
									:value="evaluateItem.value"
									:evaluatePeople="evaluateItem.evaluatePeople"
									:evaluateTime="evaluateItem.evaluateTime"
		></EvaluateItem>
	</div>
</template>

<script>
  import EvaluateItem from "../../../components/EvaluateItem";
  export default {
    name: "CourseEvaluateInfo",
		data() {
      return {
        evaluateList: [
          {
            name: '物理发展史',

            value: '物理学学发展史这门学的历史，爱因斯坦的相对论、霍金的黑洞学说。',
            evaluatePeople: '张一员工',
            evaluateTime: '2018-10-11'
          },{
            name: '化学',
            value: '化学发展史这门学的历史，听了这门课让人深刻了解了化学的专业的知识。',
            evaluatePeople: '张一员工',
            evaluateTime: '2018-12-11'
          }, {
            name: '政治学',
            value: '政治学是一个优秀的学科',
            evaluatePeople: '李三员工',
            evaluateTime: '2018-12-11'
          }

        ]

      }
		},
    components: {EvaluateItem}
  }
</script>

<style scoped>
.evaluate-content{

}
</style>
