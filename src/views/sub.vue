<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Sub',
  setup() {
    const router = useRouter()
    const toHome = () => router.push({ path: '/' })
    return {
      toHome
    }
  },
})
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
