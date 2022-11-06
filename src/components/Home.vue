<template>
  <my-vue-element>
    <div slot="msg">
      <h1>11</h1>
      <h2>22</h2>
      <test />
    </div>
  </my-vue-element>
  <hr>
  <my-example />
  <hr>
  <component :is="HelloWorld" msg="hi" />
  <!-- 由于 'input' 是原生 HTML 元素，因此这个 v-model 不起作用 -->
  <component is="input" v-model="username" />{{username}}
  <input v-model="username">
  <hr>
  <component :is="!isShow ? 'b' : 'i'">isShow</component>
  <component :is="isShow ? myDefineComponent : HelloWorld" :[prop]="'hi'" />
  <button @click="isShow=!isShow">isShow</button>
</template>
<script setup>
  import { ref, watchEffect } from 'vue'
  import HelloWorld from './HelloWorld.vue';
  import myDefineComponent from './defineComponent.vue'
  import test from './test';
  const isShow = ref(1), prop = ref('msg');
  watchEffect(() => {
    prop.value = isShow.value ? 'b' : 'msg';
  })
  const username = ref()
</script>
<style scoped>
</style>
