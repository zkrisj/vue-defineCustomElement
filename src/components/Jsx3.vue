<template>
  <App/>
  <p>12</p>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
  const count = ref(0)
  const msg = ref('Hello, World!')

  function increment() {
    count.value++
  }
  const App = () => (
    <div>
      <h1>{count.value}</h1>
      <button onClick={increment}>{msg.value}</button>
    </div>
  )
</script>