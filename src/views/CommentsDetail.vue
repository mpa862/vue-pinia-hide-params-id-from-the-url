<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const comment = ref({})

const getComment = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${route.params.id}`
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
