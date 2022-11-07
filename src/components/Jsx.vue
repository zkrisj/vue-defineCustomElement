<template>
  <test />
  <list />
</template>
<script setup>
  import test from './test';
  import list from './list';
</script>
<style>
  .box {
    display: flex;
  }
  .box span {
    flex: 100px;
  }
</style>
