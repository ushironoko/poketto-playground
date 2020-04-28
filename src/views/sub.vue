<script>
import { useAppConfig } from '~/views/useAppConfig'
import { useRouter } from 'vue-router'

export default {
  name: 'Index',
  setup() {
    const router = useRouter()
    const toHome = () => router.push({ path: '/' })
    return {
      useAppConfig,
      toHome
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
    <div>
      <button @click="toHome">
        to sub button
      </button>
    </div>
  </div>
</template>
