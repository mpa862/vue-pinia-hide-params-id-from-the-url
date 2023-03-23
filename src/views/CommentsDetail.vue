<script setup>
import { ref, onMounted } from 'vue'
import { useCasheModuleStore } from '../stores/cacheModule'
import axios from 'axios'

const CasheModuleStore = useCasheModuleStore()
const comment = ref({})

const getComment = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${CasheModuleStore.getComment.id}`
  )
  comment.value = data
}

onMounted(async () => {
  await getComment()
})
</script>
<template>
  <pre>
    {{ comment }}
  </pre>
</template>

<style lang="scss" scoped></style>
