<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PokettoButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
})
</script>

<template>
  <button>{{ text || 'click' }}</button>
</template>
