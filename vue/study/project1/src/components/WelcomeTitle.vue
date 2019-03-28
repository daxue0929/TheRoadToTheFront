<template>
	<div class="header">
		<div class="header-top">
			<img class="header-top-img" src="../assets/lingling.png">
			<p class="header-top-p">欢迎访问{{name}}页面</p>
		</div>
		<div class="header-introduction">

			<div>登录人员：{{emp.empName}}</div>
			<div>所在公司：{{emp.empCompanyName}}</div>
			<div>登录时间：{{loginTime}}</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "WelcomeTitle",
    data() {
      return {
        emp: {
          empName:this.$store.state.empName,
          empCompanyName: this.$store.state.companyTitle
        },
				time:new Date()
      }
    },
    computed: {
      loginTime: function () {
        return this.time.getFullYear()+"-"+ this.time.getMonth()+"-"+this.time.getDay()+" "+this.time.getHours()+":"+this.time.getMinutes()+":"+this.time.getSeconds()
      },
    },
		// watch: {
    //   time: function () {
		//
    //   }
		// },
		// mounted: function() {
    //   let _this = this
    //   this.timer = setInterval(function () {
    //     _this.time = new Date()
    //   },1000)
		// },
		props: {
      name: {
        type:String,
				default:"默认"
			}
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
</style>
