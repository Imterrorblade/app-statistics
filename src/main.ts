import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from './plugins/naive'

const app = createApp(App)
app
.use(router)
.use(naive)
.mount('#app')
