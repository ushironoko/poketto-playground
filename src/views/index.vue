<script lang="ts">
import { defineComponent } from 'vue'
import { useAppConfig } from '~/views/useAppConfig'
import { useRouter } from 'vue-router'
import App from 'poketto-components'

export default defineComponent({
  name: 'Index',
  components: {
    App
  },
  setup() {
    const router = useRouter()
    const toSub = () => router.push({ name: 'sub' })
    return {
      useAppConfig,
      toSub
    }
  },
})
</script>

<template>
  <div>
    <p>{{ useAppConfig.name }}</p>
    <p>{{ useAppConfig.version }}</p>
    <p>{{ useAppConfig.mode }}</p>
    <router-link :to="{ name: 'sub' }">
      to sub link
    </router-link>
    <div>
      <button @click="toSub">
        to sub button
      </button>
    </div>
    <div>
      <App />
    </div>
  </div>
</template>
