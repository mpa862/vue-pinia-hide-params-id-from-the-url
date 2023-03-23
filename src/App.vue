<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <ul>
    <li>
      <RouterLink to="/posts">Posts</RouterLink>
    </li>
    <li>
      <RouterLink to="/comments">Comments</RouterLink>
    </li>
  </ul>

  <RouterView />
</template>

<style scoped></style>
