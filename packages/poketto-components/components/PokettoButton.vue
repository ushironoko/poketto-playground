<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PokettoButton',
  props: {
    text: {
      type: String,
      default: 'click'
    }
  },
})
</script>

<template>
  <button>{{ text }}</button>
</template>
