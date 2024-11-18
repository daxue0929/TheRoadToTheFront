<script setup lang="ts">
const props = defineProps({
      'title': String,
      'content': String
    }
)

console.log(props)

import useInfoStore from "@/store/modules/info";


let storeInfo = useInfoStore();

const updateCount = () => {
  // 修改仓库的count数据
  storeInfo.updateCount();
  console.log(123)
}

import {Check, Edit} from '@element-plus/icons-vue'

</script>

<template>
  <div class="container">
    <h4>{{ title }}</h4>
    <p>我是自定义的一个组件, 组件名字是: Test01.vue</p>
    <p>仓库数据：{{ storeInfo.count }}</p>
    <div class="btn">
      <el-button type="primary" size="small" @click="updateCount" :icon="Edit">修改</el-button>
    </div>

  </div>
</template>

<style scoped>
.container {
  width: 300px;
  height: 150px;
  background: skyblue;
}

.btn {
  margin-top: 10px;
}

</style>