<script lang="ts">
import { defineComponent } from 'vue'
import { useAppConfig } from './useAppConfig'
import { useRouter } from 'vue-router'
import { PokettoButton } from '@poketto/components'

export default defineComponent({
  name: 'Index',
  components: {
    PokettoButton
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
      <PokettoButton
        text="to sub"
        @click="toSub"
      />
    </div>
    <div>
      <App />
    </div>
  </div>
</template>
