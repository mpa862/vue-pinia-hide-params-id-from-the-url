<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCasheModuleStore } from '../stores/cacheModule.js'
import axios from 'axios'

const casheModuleStore = useCasheModuleStore()
const router = useRouter()

const comments = ref([])

const headers = ref(['postId', 'id', 'name', 'email', 'body'])

const getComments = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments')
  comments.value = data
}

const redirectPage = (e) => {
  let { id } = e
  casheModuleStore.setModule('comment', { id })
  router.push({ name: 'commentDetail' })
}

onMounted(async () => {
  await getComments()
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
      <tr v-for="(comment, indexComment) of comments" :key="indexComment">
        <td v-for="(header, indexHeader) of headers" :key="indexHeader">
          {{ comment[header] }}
        </td>
        <td>
          <button @click="redirectPage(comment)">View</button>
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
