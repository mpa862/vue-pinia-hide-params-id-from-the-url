<script setup>
import { ref, onMounted } from 'vue'
import { useCasheModuleStore } from '../stores/cacheModule'
import axios from 'axios'

const CasheModuleStore = useCasheModuleStore()
const post = ref({})

const getPost = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${CasheModuleStore.getPost.id}`
  )
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
