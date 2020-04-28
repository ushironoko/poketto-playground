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
    <p>Sub Page</p>
    <router-link :to="{ path: '/' }">
      home
    </router-link>
  </div>
</template>
