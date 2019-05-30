<template>
	<div class="eva-item">
		<div class="left">
			<span class="c_name">{{name}}</span>
			<!--<span class="t_name">{{teacherName}}</span>-->
		</div>
		<div class="mid">{{value}}</div>
		<div class="right">
			<span class="eva-person">{{evaluatePeople}}</span>
			<span class="eva-time">{{evaluateTime}}</span>
		</div>
	</div>
</template>

<script>
  export default {
    name: "EvaluateItem",
		props: {
    	name:'',
			value:'',
			evaluatePeople:'',
			evaluateTime:''
		},
		methods: {
			test: function () {
				this.$cookieStore.getCookie('cookie','这是一个帅气有礼貌的人')
      }
		}
  }
</script>

<style scoped lang="scss">

	.eva-item{
		margin-bottom: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: stretch;
		/*background: #C2CBBE;*/
		height: 80px;
		.left{
			padding-top: 25px;
			width: 15%;
			box-shadow: 0 0 3px #EA7F84 inset;
			.c_name{
				display: block;
				font-size: 18px;
				color: red;
				text-align: center;

			}
			.t_name{
				display: block;
				margin-top: 20px;
				font-size: 20px;
				text-align: center;
			}
		}
		.mid{
			padding: 10px;
			width: 70%;
			box-shadow: 0 0 5px #996DCB inset;
			border-radius: 5px;
			line-height: 20px;
			overflow: scroll;

			/*background: #B3A6CB;*/
		}
		.right{
			padding-top: 20px;
			width: 10%;
			box-shadow: 0 0 3px #EA7F84 inset;
			border-radius: 20px;
			/*background: #CBACB6;*/
			.eva-person{
				display: block;
				text-align: center;

			}
			.eva-time{
				display: block;
				text-align: center;
				margin-top: 20px;
				font-size: 12px;
			}
		}
	}
</style>
