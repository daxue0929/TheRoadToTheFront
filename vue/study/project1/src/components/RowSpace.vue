<template>
	<span class="row-space" :style="{width:w+'px',background:'#fff'}">
		---{{w}}space---
	</span>
</template>

<script>
  export default {
    name: "RowSpace",
		data () {
      return {
        // width:this.props.w,
				// styleObj: {
				//   display: 'inline-block',
				//   width: this.props.w + "px",
				// 	background: "#fff"
				// }
			}
		},
		props: {
      w: {
        type: String,
				default: '50'
			}
		},
		computed: {

		},
		watch: {

		},
		created() {
      console.log("本分隔符被创建啦");
    },
		mounted() {
      console.log("分隔符组件被挂载了")
    }
  }
</script>


<!-- props里面动态传值,改变data对象的数据,实现通过传不同的值,可以控制元素的宽度.
		问题: 一直在props中读取props里面的数据失败

		把传的值显示出来在页面上,但是并没有达到效果.width的值固定为 100px
		status: 未解决

		初步解决:把style以对象的方式.内置样式表
-->

<style lang="scss" scoped>
	.row-space{
		display: inline-block;
	}
</style>
