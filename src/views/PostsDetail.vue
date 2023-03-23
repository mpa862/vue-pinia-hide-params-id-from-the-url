<script setup>
import { ref, onMounted } from 'vue'
import { useCasheModuleStore } from '../stores/cacheModule'
import { useRouter } from 'vue-router'
import axios from 'axios'

const CasheModuleStore = useCasheModuleStore()
const router = useRouter()

const post = ref({})

const getPost = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${CasheModuleStore.getPost.id}`
  )
  post.value = data
}

const validatePostId = () => {
  if (!CasheModuleStore.getPost?.id) router.push({ name: 'posts' })
}

onMounted(async () => {
  validatePostId()
  await getPost()
})
</script>
<template>
  <pre>
    {{ post }}
  </pre>
</template>

<style lang="scss" scoped></style>
