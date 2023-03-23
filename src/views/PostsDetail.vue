<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const post = ref({})

const getPost = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  post.value = data
}

onMounted(async () => {
  await getPost()
})
</script>
<template>
  <pre>
    {{ post }}
  </pre>
</template>

<style lang="scss" scoped></style>
