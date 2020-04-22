<script>
export default {
  name: 'Index',
  setup() {
    const appName = 'Hello poketto'
    return {
      appName
    }
  },
}
</script>

<template>
  <div>{{ appName }}</div>
</template>


