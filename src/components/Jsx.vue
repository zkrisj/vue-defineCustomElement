<template>
  <test2 />
  <!-- <test :a="msg" :b="msg2"> -->
  <test v-bind="properties">
    <template #test="t">{{ t }}</template>
    <template #="t">{{ t }}</template>
  </test>
  <list />
</template>
<script setup>
  import test from './test';
  import test2 from './test2';
  import list from './list';
  import { ref } from 'vue';
  const msg = ref(11);
  const msg2 = ref(22);
  const properties = { a: 1, b: 2 };
</script>
<style>
  .box {
    display: flex;
  }
  .box span {
    flex: 100px;
  }
</style>
