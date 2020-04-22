<script>
import { useAppConfig } from '~/views/useAppConfig'
export default {
  name: 'Index',
  setup() {
    return {
      useAppConfig
    }
  },
}
</script>

<template>
  <div>
    <p>{{ useAppConfig.name }}</p>
    <p>{{ useAppConfig.version }}</p>
    <p>{{ useAppConfig.mode }}</p>
  </div>
</template>


