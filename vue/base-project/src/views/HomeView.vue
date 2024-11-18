<script setup lang="ts">
import {hello} from '@/api/hello'

const fetchHello = async () => {
  return await hello();
}

fetchHello().then(resp => {
  console.log("id: ", resp.id)
  console.log("name: ", resp.name)
})

console.log("import.meta.env.BASE_URL: ", import.meta.env.BASE_URL)


</script>

<template>
  <main>
    <div>home</div>
  </main>
</template>
