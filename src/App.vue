<template>
  <RouterLink to="/">Home</RouterLink>
  <i style="margin: 0 .5em;">/</i>
  <RouterLink to="/components">Components</RouterLink>
  <RouterView />
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped>
</style>
