<script setup>
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import myDefineComponent from './components/defineComponent.vue'
const posts = ref([
  { id: 1, title: 'My journey with Vue', postFontSize: 1 },
  { id: 2, title: 'Blogging with Vue', postFontSize: 1 },
  { id: 3, title: 'Why Vue is so fun', postFontSize: 1 }
])
// const postFontSize = ref(1)
</script>

<template>
  <div>
    <my-vue-element>
      <h1>11</h1>
      <h2>22</h2>
    </my-vue-element>
  </div>
  <my-example></my-example>
  <myDefineComponent/>
  <BlogPost :style="{ fontSize: post.postFontSize + 'em' }" v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="post.postFontSize += 0.1"></BlogPost>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
