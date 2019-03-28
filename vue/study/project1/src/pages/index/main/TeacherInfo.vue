<template>
	<div>
		<div class="teacher-item">
			教员姓名教员执教时间教员签名学历
		</div>

	</div>
</template>

<script>
  export default {
    name: "TeacherInfo"
  }
</script>
<style scoped>
	.teacher-item{
		background: #FEFEFF;
		height: 50px;
		width: 100%;
		padding-top: 5px;
		padding-left: 3px;
		border-bottom: 2px solid #CB979D;
		box-shadow: 0 0 5px #CB979D inset;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;

	}
</style>
