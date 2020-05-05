<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'PokettoButton'
})
</script>

<template>
  <button>{{ $props.text || 'click' }}</button>
</template>

<style scoped>
button {
  background: #ffffff;
  color: rgb(49, 49, 49);
}

</style>
