<script setup lang="ts">
const props = defineProps({
      'title': String,
      'content': String
    }
)

console.log(props)

</script>

<template>
  <h4>{{ title }}</h4>
  <p>我是自定义的一个组件, 组件名字是: Test01.vue</p>
</template>

<style scoped>

</style>