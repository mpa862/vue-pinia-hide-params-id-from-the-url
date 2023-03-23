<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const posts = ref([])

const headers = ref(['userId', 'id', 'title', 'body'])

const getPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  posts.value = data
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
          <RouterLink :to="`post/${post.id}`">
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
