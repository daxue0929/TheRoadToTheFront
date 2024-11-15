<script setup lang="ts">
import {computed, onMounted, reactive, ref, watch} from 'vue'
import {timeSelectProps} from "element-plus";
import Test01 from "@/components/custom/Test01.vue";

const count = ref(0)

function increment(value: number) {
  count.value += value
}

let dynamicAttribute = ref("test2-p")

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "YES" : "NO"
})

const awesome = ref(true)

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

function warn(message: string, event: Event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

const message = ref('')

onMounted(() => {
  console.log(`the component is now mounted.`)
})

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(question, async (newValue, oldValue) => {
  if (newValue.includes("?")) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      await sleep(2000)
      answer.value = "回答正确"
    }catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }finally {
      loading.value = false
    }
  }
})

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const test01Component = ref({title: "Hello Title"});



</script>

<template>
  <main>
    <div class="test1">
      <button @click="increment(-1)">-</button>
      {{count}}
      <button @click="increment(1)">+</button>
    </div>
    <br />

    <div class="test2">
      <span :class="dynamicAttribute" @click="count++">{{count}}</span>
    </div>
    <br />

    <p>Has published books: <span>{{ publishedBooksMessage }}</span></p>

    <br />

    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <br />

    <p v-for="(item, index) in items" :key="index">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </p>
    <br />

    <!-- 使用内联箭头函数 -->
    <div>
      <button @click="(event) => warn('Form cannot be submitted yet.', event)">
        Submit
      </button>
    </div>
    <br />

    <div class="form-input">
      <el-input v-model="message" placeholder="edit me" />
    </div>
    <p>Message is: {{ message }}</p>
    <br />

    <div>
      <p>
        Ask a yes/no question:
        <input v-model="question" :disabled="loading" />
      </p>
      <p>{{ answer }}</p>
    </div>
    <br>

    <div>
      <Test01 :title="test01Component.title"/>
    </div>
    <br />




  </main>
</template>

<style scoped>
main{
  max-width: 1200px;
  margin: 50px auto 0;
  background-color: rgb(241,241,241);
}
.test2 span:first-child{
  cursor: pointer;
}
.form-input{
  width: 300px;
}

</style>