<template>
  <h1>Example.ce</h1>
  <BlogPost title="1212" :style="{ fontSize: postFontSize + 'em' }" @enlarge-text="postFontSize += 0.1" />
  <BlogPost2 />
  <BlogPost :style="{ fontSize: post.postFontSize + 'em' }" v-for="post in posts" :key="post.id" :title="post.title"
    @enlarge-text="post.postFontSize += 0.1" />
  <HelloWorld msg="Vite" />
</template>
<script setup>
  defineProps({ '*': '' })
  import { ref } from 'vue'
  import HelloWorld from './HelloWorld.vue'
  const postFontSize = ref(1)
  const posts = ref([
    { id: 1, title: 'My journey with Vue', postFontSize: 1 },
    { id: 2, title: 'Blogging with Vue', postFontSize: 1 },
    { id: 3, title: 'Why Vue is so fun', postFontSize: 1 }
  ])
</script>
<style>
  h1 {
    color: red;
  }
</style>
