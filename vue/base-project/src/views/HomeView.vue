<script setup lang="ts">
import {hello} from '@/api/hello'

const fetchHello = async () => {
  let resp = await hello({id: 2, name: 'test'});
  return resp;
}

fetchHello().then(resp => {
  console.log("id: ", resp.id)
  console.log("name: ", resp.name)
})


</script>

<template>
  <main>
    <div>home</div>
  </main>
</template>
