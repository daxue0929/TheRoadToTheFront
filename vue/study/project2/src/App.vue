<template>
	<!--<div id="app">-->
	<!--<img alt="Vue logo" src="./assets/logo.png">-->
	<!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
	<!--</div>-->
	<div>
	<router-view></router-view>
	</div>
</template>

<script>
	import './assets/global-css.scss'
  export default {
    name: 'app'
  }
</script>

<style>
	@import "assets/reset.css";
</style>
