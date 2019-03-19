<template>
	<div id="demo1">
		<div class="header">
			<p class="title">这是Demo1</p>
		</div>
		<div class="mid-content">
			<div class="first">
				<p>
					<button @click="showMe">方法</button>
				</p>
				<p>{{this.$store.state}}</p>
				<br>
				<p>{{this.$store.state.Login.message}}</p>
			</div>
			<br>
			<div class="second">
				<p>
					<button @click="showMe">方法2</button>
				</p>
				<p>{{this.$store.state}}</p>
			</div>
		</div>


	</div>

</template>

<script>
  import { SHOW_ME } from "../store/mutation-types";
  import './style.scss'

  export default {
    name: "Demo1",
    data: function () {
      return {
        id: this.$user.id,
        name: this.$user.name,

        people: this.$store.people
      }
    },
    methods: {
      showMe: () => {
        window.console.log(this.$store.state.Login);
        // this.$store.state.Login.qq.id
        this.$store.dispatch({
          type: SHOW_ME
        })
      }
    },
    components: {}
  }
</script>

<style scoped lang="scss">
	//html {font-size: 10px}
	@import "../assets/global-css";

	.mid-content {
		margin-top: 1rem;
		border: $basic-border;
		@include rounded-corners;
	}
</style>
