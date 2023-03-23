<script setup>
import { ref, onMounted } from 'vue'
import { useCasheModuleStore } from '../stores/cacheModule'
import { useRouter } from 'vue-router'
import axios from 'axios'

const CasheModuleStore = useCasheModuleStore()
const router = useRouter()

const comment = ref({})

const getComment = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${CasheModuleStore.getComment.id}`
  )
  comment.value = data
}

const validateCommentId = () => {
  if (!CasheModuleStore.getComment?.id) router.push({ name: 'comments' })
}

onMounted(async () => {
  validateCommentId()
  await getComment()
})
</script>
<template>
  <pre>
    {{ comment }}
  </pre>
</template>

<style lang="scss" scoped></style>
