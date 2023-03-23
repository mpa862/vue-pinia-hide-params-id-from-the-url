<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const comments = ref([])

const headers = ref(['postId', 'id', 'name', 'email', 'body'])

const getComments = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments')
  comments.value = data
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
          <RouterLink :to="`comment/${comment.id}`">
            <button>View</button>
          </RouterLink>
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
