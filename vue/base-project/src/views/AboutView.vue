
<script setup lang="ts">
import { throttle } from 'lodash';
import {ref} from "vue";

const count = ref(0)

const handleResize = throttle(() => {
  count.value = count.value + 1
  console.log(count.value)
}, 2000);

</script>

<template>
  <div class="container">
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <br />

    <div>
      <p>数据: <span>{{count}}</span></p>
      <el-button type="primary" size="small" @click="handleResize">加</el-button>
    </div>
  </div>
</template>

<style>
.container {
  width: 100vh;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
}
</style>
