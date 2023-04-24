<template>
  <div>
    <h1>{msg}</h1>
    <button onClick={increment}>Increment</button>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const msg = ref('Hello, World!')

    function increment() {
      count.value++
    }

    return () => (
      <div>
        <h1>{count.value}</h1>
        <button onClick={increment}>{msg.value}</button>
      </div>
    )
  }
})
</script>