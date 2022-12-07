<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button @click="count++">count is {{ count }}</button>
  </div>
  <slot></slot>
  <slot name="hello"></slot>
</template>
<script setup>
  import { ref } from 'vue'
  defineProps({
    msg: String
  })
  const count = ref(0)
  import { useSlots, useAttrs } from 'vue'
  const slots = useSlots()
  const attrs = useAttrs()
  // console.log(slots);
  // console.log(attrs);
</script>
<style scoped>
</style>
