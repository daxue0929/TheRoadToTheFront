<template>
	<div>
		<WelcomeTitle name="培训状态"></WelcomeTitle>


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
          empName:'张三',
          empCompanyName:'微软科技'
        }
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

</style>
