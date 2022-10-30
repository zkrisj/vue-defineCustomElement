<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<script setup>
import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()
console.log(slots, attrs);
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>

<style>
</style>