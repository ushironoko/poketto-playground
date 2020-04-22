import { createApp } from 'vue'
import App from '~/App.vue'
import { route } from '~/router'

const app = createApp(App)
app.use(route)
app.mount('#root')
