<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCasheModuleStore } from '../stores/cacheModule.js'
import axios from 'axios'

const casheModuleStore = useCasheModuleStore()
const router = useRouter()

const posts = ref([])

const headers = ref(['userId', 'id', 'title', 'body'])

const getPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  posts.value = data
}

const redirectPage = (e) => {
  let { id } = e
  casheModuleStore.setModule('post', { id })
  router.push({ name: 'postDetail' })
}

onMounted(async () => {
  await getPosts()
})
</script>
<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) of headers" :key="index">{{ header }}</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, indexpost) of posts" :key="indexpost">
        <td v-for="(header, indexHeader) of headers" :key="indexHeader">
          {{ post[header] }}
        </td>
        <td>
          <button @click="redirectPage(post)">View</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table,
td {
  border: 1px solid #333;
  padding: 5px;
}

thead,
tfoot {
  background-color: #333;
  color: #fff;
}
</style>
