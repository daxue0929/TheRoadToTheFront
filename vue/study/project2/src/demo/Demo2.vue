<template>
	<div>
		<h1 style="font-size: 30px;background: #B9A9CB;text-align: center">demo2</h1>
		<canvas ref="canvas" style="background: #E1DDDE;" width="500" height="200"></canvas>
	</div>
</template>

<script>
  export default {
    name: "Demo2",
    mounted: function () {

      let canvas = this.$refs.canvas
      let ctx = canvas.getContext('2d')

      ctx.beginPath()
      //设置弧线的颜色为蓝色
      ctx.strokeStyle = "blue";
      let circle = {
        x: 100,    //圆心的x轴坐标值
        y: 100,    //圆心的y轴坐标值
        r: 50      //圆的半径
      };
      ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 1, false);
      //按照指定的路径绘制弧线
      ctx.stroke();

      window.console.log(canvas.getContext('2d'))
    }
  }
</script>

<style scoped>

</style>
