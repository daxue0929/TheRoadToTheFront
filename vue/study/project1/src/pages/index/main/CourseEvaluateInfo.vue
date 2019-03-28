<template>
	<div>
		课程评价信息表
		<EvaluateItem v-for="evaluateItem in evaluateList"
									:courseName="evaluateItem.courseName"
									:teacherName="evaluateItem.teacherName"
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
            courseName: '数学发展史',
            teacherName: '大雪老师',
            value: '物理学学发展史这门学的历史，听了这门课之爱你爱你爱你爱你爱爱你爱你',
            evaluatePeople: '张一员工',
            evaluateTime: '2018-12-11'
          },
          {
            courseName: '数学发展史',
            teacherName: '大雪老师',
            value: '物理学学发展史这门学的历史，听了这门课之爱你爱你爱你爱你爱爱你爱你',
            evaluatePeople: '张一员工',
            evaluateTime: '2018-12-11'
          },
          {
            courseName: '数学发展史',
            teacherName: '大雪老师',
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

<style scoped>

</style>
