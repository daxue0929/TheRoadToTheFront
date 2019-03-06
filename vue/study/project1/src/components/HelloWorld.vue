<template>
  <div class="hello">
    <h3>{{ this.$route.query }}</h3>

		<!-- 复选框--和文档有区别,是全选的样子 -->
		<div>
			<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
			<label for="jack">Jack</label>
			<input type="checkbox" id="john" value="John" v-model="checkedNames">
			<label for="john">John</label>
			<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
			<label for="mike">Mike</label>
			<br>
			<span>Checked names: {{ checkedNames }}</span>
		</div>

		<br>
		<br>

		<!-- 单选框 -->
		<div>
			<input type="radio" id="one" value="One" v-model="picked">
			<label for="one">One</label>
			<br>
			<input type="radio" id="two" value="Two" v-model="picked">
			<label for="two">Two</label>
			<br>
			<span>Picked: {{ picked }}</span>
		</div>
		<br>
		<br>
		<!-- 下拉单选框 -->
		<div>
			<select v-model="selected">
				<option disabled value="">请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<span>Selected: {{ selected }}</span>
		</div>

		<br>
		<br>

		<div id="example-6">
			<select v-model="selectedDuo" multiple style="width: 50px;">
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<br>
			<span>Selected: {{ selectedDuo }}</span>
		</div>

		<br>
		<br>
		<button @click="fun">子组件传值给父组件</button>
  </div>
</template>

<script>

  export default {
  name: 'HelloWorld',
	data: function () {
  	return {
			checkedNames: [],
			picked: '',
			selected: '',
			selectedDuo: []
		}
	},
  props: {
    msg: String,
  },
	methods: {
		fun: function () {
			this.$emit('my-event','hello World');
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	div{
		input{
			color: red;
		}
	}
</style>
