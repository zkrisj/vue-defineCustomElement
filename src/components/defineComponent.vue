<template>
  <h1>abc</h1>
</template>

<script>
import { defineComponent, h } from "vue";
export default defineComponent({
  setup(o) {
    const props = { style: { color: "red" } };
    const small = h("small", "789");
    return () => h("h2", props, ["123456", small]);
  },
});
</script>

<style>
</style>