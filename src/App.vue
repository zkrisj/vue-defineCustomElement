<template>
  <RouterLink to="/">Home</RouterLink>
  <i style="margin: 0 .5em;">/</i>
  <RouterLink to="/components">Components</RouterLink>
  <i style="margin: 0 .5em;">/</i>
  <RouterLink to="/jsx">Jsx</RouterLink>
  <i style="margin: 0 .5em;">/</i>
  <RouterLink to="/jsx2">Jsx2</RouterLink>
  <i style="margin: 0 .5em;">/</i>
  <RouterLink to="/jsx3">Jsx3</RouterLink>
  <RouterView />
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped>
</style>
