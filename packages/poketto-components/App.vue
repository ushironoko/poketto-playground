<script lang="ts">
import PokettoButton from './components/PokettoButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PokettoButton
  },
  setup() {
    return {
      count: 0
    }
  },
})
</script>

<template>
  <div>
    <h1>Hello Vite + Vue 3!</h1>
    <p>Edit ./App.vue to test hot module replacement (HMR).</p>
    <p>
      <span>Count is: {{ count }}</span>
      <PokettoButton
        text="increment"
        @click="count++"
      />
    </p>
  </div>
</template>

<style scoped>
h1 {
  color: #4fc08d;
}

h1, p {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
