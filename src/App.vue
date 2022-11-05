<template>
  <div>
    <my-vue-element>
      <h1>11</h1>
      <h2>22</h2>
      <test/>
    </my-vue-element>
  </div>
  <my-example></my-example>
  <myDefineComponent />
  <BlogPost :style="{ fontSize: post.postFontSize + 'em' }" v-for="post in posts" :key="post.id" :title="post.title"
    @enlarge-text="post.postFontSize += 0.1"></BlogPost>
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup>
  import { ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import myDefineComponent from './components/defineComponent.vue'
  import test from './components/test';
  // const postFontSize = ref(1)
  const posts = ref([
    { id: 1, title: 'My journey with Vue', postFontSize: 1 },
    { id: 2, title: 'Blogging with Vue', postFontSize: 1 },
    { id: 3, title: 'Why Vue is so fun', postFontSize: 1 }
  ])
</script>
<style scoped>
</style>
