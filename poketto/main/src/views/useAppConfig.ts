import { computed } from 'vue'

export const useAppConfig =
  computed(() => {
    return {
      name: 'poketto',
      version: '0.0.1',
      mode: process.env.NODE_ENV,
    }
  })
